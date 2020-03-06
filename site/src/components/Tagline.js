/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { ScrollWords } from './ScrollWords'

export const Tagline = ({
  tagline = 'Tagline',
  scrollItems = [],
  offsetLeft = '286px',
  children = {}
}) => {
  scrollItems = !scrollItems ? [
    { id: 1, text: 'test1' },
    { id: 2, text: 'test2' },
    { id: 3, text: 'test3' },
  ] : scrollItems
  return (
    <Box sx={{ zIndex: - 3, position: 'relative', mt: 4 }}>
      <Box as='span' sx={{ fontSize: '48px', fontWeight: 400 }}>
        {tagline}
        <ScrollWords offsetLeft={offsetLeft} />
      </Box>
    </Box >
  )
}



