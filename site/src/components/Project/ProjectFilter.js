import React, { useState } from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import { categories } from "../../styles/utils"

const filterStyles = {
  '&:hover': {
    cursor: 'pointer',
    color: 'blue',
  },
  '& a': {
    fontSize: 2,
    fontWeight: 600,
    position: 'relative',
  },
  // '& ul': {
  //   border: 'test',
  // }
}

export default function ProjectFilter({ children }) {
  const [showCats, setShowCats] = useState(false)
  const toggleShowCats = () => setShowCats(!showCats)
  return (
    <motion.div
      initial={false}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      sx={filterStyles}
    >
      {showCats ? (
        <ul style={{
          position: 'fixed',
          display: 'flex',
          background: 'rgba(0,0,0,0.2)',
          listStyleType: 'none',
          transform: showCats && 'translate3d(-100%, -100%, 0)',
          transition: 'transform 0.35 ease-in',
          zIndex: 3,
        }}>
          {categories.length && categories.map((cat, i) => (
            <li
              key={cat.id}
              style={{
                textDecoration: 'none',
                padding: '0 4px',
              }}
            >
              <a href={'#0'}>{cat}</a>
            </li>
          ))}
          <span
            className="fa-stack fa-2x"
            onClick={toggleShowCats}
            style={{ fontSize: '0.6em', color: 'red', padding: '7px 3px' }}
          >
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-times fa-stack-1x fa-inverse"></i>
          </span>
        </ul>
      ) : (
          <a
            onClick={toggleShowCats}
            style={{
              transform: showCats && 'translateY(-100%)',
              transition: 'transform 0.35 ease-in',
            }}
          >
            filter
          </a>
        )}
    </motion.div >
  )
}
