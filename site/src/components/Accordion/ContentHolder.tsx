import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContentHolder = ({ i, expanded, toggleExpanded = () => console.log('toggleExpanded'), children, ...props }) => {
  const isOpen = i === expanded
  console.log(isOpen, i, expanded)
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{ collapsed: { scale: 0.1 }, open: { scale: 1 } }}
          transition={{ duration: 0.4 }}
          style={{ padding: '20px', transformOrigin: 'center center', gridArea: 'accordion' }}
        >
          <div style={{
            background: 'gray',
            minHeight: '100px',
            border: '1px solid red',
            color: 'white',
            ...props
          }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
};