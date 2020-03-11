import * as React from "react";
import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }) => (
  <div
    style={{
      width,
      height: '18px',
      borderRadius: '10px',
      marginBottom: '8px',
      marginRight: '8px',
      background: '#0055ff',
      display: 'inline-block',

    }}
  />
);

const Paragraph = ({ words }) => (
  <div style={{ marginBottom: '20px' }}>
    {words.map(width => (
      <Word width={width} />
    ))}
  </div>
);

export const ContentPlaceholder = ({ children }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    style={{ padding: '20px', }}
  >
    {
      !children ?
        (
          paragraphs.map(words => (
            <Paragraph words={words} />
          ))
        )
        : children
    }
  </motion.div>
);
