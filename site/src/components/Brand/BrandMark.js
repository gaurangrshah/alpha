/** @jsx jsx */
import React from "react"
import { jsx, Box } from "theme-ui"
import Logo from './Logo'
import Divider from "../../elements/divider"


export const BrandMark = ({ offset }) => {
  return (
    <Divider speed={0.2} offset={offset}>
      <Box as='section' sx={{ maxWidth: '200' }}>
        <Logo layer="drop" color='icon_green' left='10%' top='15%' width='250px' />
        <Logo layer="g" color='icon_darkest' left='13.6%' top='18.6%' width='195px' />
        <Logo layer="g" color='icon_blue' left='13.4%' top='18.5%' width='195px' />
      </Box>
    </Divider>
  )
}
