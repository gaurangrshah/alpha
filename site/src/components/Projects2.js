import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text } from "@theme-ui/components"

import Divider from "../elements/Divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Project2MDx from "../sections/projects2.mdx"

export const Projects2 = ({ offset }) => {
  return (
    <div>
      {/* <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
      /> */}
      <Divider speed={0.1} offset={offset} >
        <Content sx={{
          '& h2': {
            variant: 'text.large'
          }
        }}>
          {/* <Inner> */}
          {/* </Inner> */}
        </Content>
      </Divider>
    </div>
  )
}
