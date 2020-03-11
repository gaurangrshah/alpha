/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

export default function Tagline({
  tagline = 'Tagline',
  scrollItems = [],
  offsetLeft = '450px',
  children = {}
}) {
  scrollItems = !scrollItems ? [
    { id: 1, text: 'test1' },
    { id: 2, text: 'test2' },
    { id: 3, text: 'test3' },
  ] : scrollItems
  return (
    <>
      <Box sx={{ zIndex: - 3, position: 'relative' }}>
        <Box
          sx={{
            display: ['block', null, null, null, 'flex'],
            fontSize: ['3rem', null, '4rem'],
            fontWeight: 600,
            mt: '30%',
          }}>
          <Box>{tagline}</Box>
          {children}
        </Box>
      </Box>
    </>
  )
}
