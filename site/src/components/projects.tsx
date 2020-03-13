import * as React from "react"
import { useState, useContext } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectFilter from "./Project/ProjectFilter"
import { ContentHolder } from "./Accordion/ContentHolder"
import { ExpandedContext, ProjectContext } from "../context/project-context"
import Card from "./Project/Card"
import { Shapes2 } from "./Shapes"
import { useToggleContext } from "../hooks/useGlobalContext"

const RenderProject = ({
  proj = {},
  children = {}
}) => {

  const { id = 0, thumb = "", client = "", categories = [] } = proj
  const [expanded, toggleExpanded] = useToggleContext(ExpandedContext)
  return (
    <React.Fragment>
      <Card
        id={id}
        thumb={thumb}
        title={client}
        categories={categories}
        toggleExpanded={toggleExpanded}
        open={expanded === id}
      />
      <ContentHolder
        i={id}
        expanded={expanded}
        gridArea="contentHolder"
        children={children}
        proj={proj} />
    </React.Fragment>
  )
}

const Projects = ({ offset }: { offset: number }) => {

  const [projects, setProjects, filterProjects, resetProjectsFilter] = useContext(ProjectContext)
  const [expanded] = useToggleContext(ExpandedContext)
  const projs = projects
  console.log('test2', projs)


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
              '& h2': {
                flex: 1,
              }
            }}
          >

            <h2>Projects</h2>
            <ProjectFilter projs={projs} filter={filterProjects} reset={resetProjectsFilter} />

          </Inner>
          <Inner sx={{ display: 'none' }}>
            Test
          </Inner>
          <Inner>
            <div sx={{
              position: 'relative',
              zIndex: 1,
              display: [`block`, null, `grid`],
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              gridTemplateAreas: `". ." "holder holder" ". ."`,
            }}
            >

              {projs.map((proj) => (
                <RenderProject key={proj.id} proj={{ ...proj }} />
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
