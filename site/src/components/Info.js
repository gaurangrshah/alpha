/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Drawer from './Drawer'

export default function Info() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.persist()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Box
        sx={{
          fontSize: '3',
        }}
      >
        <a
          as={Link}
          onClick={handleClick}
          sx={{
            zIndex: 100,
            color: 'text',
            position: 'fixed',
            cursor: 'pointer',
            bottom: 7,
            right: '13px',
            padding: 2,
            bg: 'icon_red',
            borderTopLeftRadius: 'lg',
            transform: 'scale(0.9)',
            borderBottomLeftRadius: 'lg',
            transition: 'transform 300ms ease-in',
            '&:hover': {
              transform: 'scale(1)',
              color: 'secondaryHover'
            }
          }}
        >
          {!isOpen ? 'curious?' : 'About Me'}
        </a>
      </Box>
      <Drawer isOpen={isOpen} />
    </>

  )
}
