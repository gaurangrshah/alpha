import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ContentPlaceholder } from "./ContentPlaceholder";


export const Accordion = ({ i, children, ...props }) => {
  const [expanded, setExpanded] = useState<false | number>(0);
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={
          () => setExpanded(isOpen ? false : i)
        }
        style={{
          background: "#0055ff",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          height: "40px",
          marginBottom: "20px",
          ...props,
        }}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            style={{ overflow: "hidden" }}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.42, 0.13, 0.58] }}
          >
            <ContentPlaceholder gridArea="contentHolder">
              {children}
            </ContentPlaceholder>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Example = ({ children }) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.

  return accordionIds.map(i => (
    <Accordion i={i} children={children} />
  ));
};

const accordionIds = [0, 1, 2, 3];
