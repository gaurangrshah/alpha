import React, { useState } from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { FilterLg } from './Filter';

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
}

export default function ProjectFilter({ projs, filter, reset, children }) {
  const [showCats, setShowCats] = useState(false)
  const toggleShowCats = () => setShowCats(!showCats)


  return (
    <motion.div
      initial={false}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      sx={filterStyles}
    >
      {showCats ? (
        <FilterLg
          showCats={showCats}
          reset={reset}
          toggleShowCats={toggleShowCats}
          fitler={filter}
        />
      ) : (
          <div
            onClick={toggleShowCats}
            style={{
              fontSize: '1.2em',
              fontWeight: '500',
              transform: showCats ? 'translateY(-100%)' : 'translateY(0)',
              transition: 'transform 0.35 ease-in',
            }}
          >
            filter
          </div>
        )}
    </motion.div >
  )
}
