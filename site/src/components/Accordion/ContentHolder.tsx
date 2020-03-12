import React from "react";
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
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
          sx={{
            background: 'alphaYellow',
            borderRadius: 'lg',
            boxShadow: 'lg',
          }}
          style={{
            padding: '10px',
            transformOrigin: 'center center',
            gridArea: 'holder',
            minHeight: '100px',
          }}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
            style={{
              color: 'white',
              background: 'darkblue',
              minHeight: '100px',
              padding: '10px',
              borderTop: '10px solid lightblue',
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
