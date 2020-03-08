/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'


export default function Info() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '5',
        right: '6',
        fontSize: '3',
        '& a': {
          color: 'altText',
          '&:hover': {
            color: 'secondary',
          },
        }
      }}
    >
      <a
        as={Link}
        href={'#0'}
        sx={{
          position: 'fixed',
          bottom: 6,
          right: 6,
        }}
      >
        curious?
      </a>
    </Box>
  )
}
