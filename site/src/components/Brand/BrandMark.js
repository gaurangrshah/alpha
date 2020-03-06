/** @jsx jsx */
import React from "react"
import { jsx, Box } from "theme-ui"
import Logo from './Logo'
import Divider from "../../elements/divider"


export const BrandMark = ({ offset }) => {
  return (
    <Divider speed={0.8} offset={offset}>
      <Box as='section' sx={{ maxWidth: '200' }}>
        <Logo layer='mark' left='10%' top='15%' width='250px' />
      </Box>
    </Divider>
  )
}
