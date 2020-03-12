import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContentHolder = ({
  i,
  expanded,
  proj,
  children,
  ...props }) => {
  return (
    <AnimatePresence initial={false}>
      {i === expanded && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{ collapsed: { scale: 0 }, open: { scale: 1 } }}
          transition={{ duration: 0.4 }}
          style={{
            padding: '20px',
            transformOrigin: 'center center',
            gridArea: 'holder',
            background: 'gray',
            minHeight: '100px',
            border: '1px solid red',
          }}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.2 } }}
            style={{
              color: 'white',
              ...props
            }}>
            {JSON.stringify(proj, null, 2) || children}
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence >
  )
};
