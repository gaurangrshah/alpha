import React, { useState } from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

const filterStyles = {
  '&:hover': {
    cursor: 'pointer',
    color: 'blue',
  },
  '& a': {
    fontSize: 2,
    fontWeight: 600,
    position: 'relative',
  }
}

export default function ProjectFilter() {
  return (
    <motion.div
      initial={false}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      sx={filterStyles}
    >
      <a>filter</a>
    </motion.div>
  )
}
