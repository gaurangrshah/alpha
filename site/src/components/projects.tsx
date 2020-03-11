import * as React from "react"
import { useState } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectFilter from "./Project/ProjectFilter"
import { ContentHolder } from "./Accordion/ContentHolder"

import Card from "./Project/Card"
import { Shapes2 } from "./Shapes"


const projs = [
  { id: 1, client: 'Aarya', categories: ['app', 'branding'] },
  { id: 2, client: 'Aarya', categories: ['app', 'branding'] },
  { id: 3, client: 'Aarya', categories: ['app', 'branding'] },
  { id: 4, client: 'Aarya', categories: ['app', 'branding'] },
]

const RenderProject = ({
  id = 0,
  thumb = '../assets/images/aaryaa_icon.png',
  client = "Client",
  categories = [],
  children = {}
}) => {
  const [expanded, setExpanded] = useState(0)
  const toggleExpanded = () => setExpanded(expanded ? 0 : id)
  return (
    <React.Fragment>
      <Card
        thumb={thumb}
        title={client}
        categories={categories}
        open={toggleExpanded}
      />
      <ContentHolder i={id} expanded={expanded} gridArea="contentHolder" children={children} />
    </React.Fragment>
  )
}

const Projects = ({ offset }: { offset: number }) => {
  return (
    <div className='holder' sx={{ position: 'relative' }}>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content
        speed={0.2}
        offset={offset + 0.1}
        factor={2}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'full',
            mx: 'auto'
          }}
        >
          <Inner
            sx={{
              display: ['flex'],
              flexDirection: ['column', 'row'],
              alignItems: 'baseline',
              border: 'test',
              '& h2': {
                flex: 1,
              }
            }}
          >
            <h2>Projects</h2>
            <ProjectFilter />
          </Inner>
          <Inner sx={{ display: 'none' }}>
            Test
          </Inner>
          <Inner>
            <div sx={{
              position: 'relative',
              zIndex: 1,
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              gridTemplateAreas: `". ." "accordion accordion" ". ."`,
            }}
            >
              {projs.map((proj) => (
                <RenderProject key={proj.id} {...proj}>
                  hmmmm.
                </RenderProject>
              ))}
            </div>
          </Inner>
        </div>
      </Content>
      <Shapes2 offset={offset} />
    </div >
  )
}

export default Projects
