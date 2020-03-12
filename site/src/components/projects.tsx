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

  const { id, thumb, client, categories } = proj
  const [expanded, toggleExpanded] = useToggleContext(ExpandedContext)
  // const toggleExpanded = (id) => {
  //   console.log('expanded', expanded, 'id', id)
  //   return setExpanded(expanded ? 0 : id)
  // }
  return (
    <React.Fragment>
      <Card
        id={id}
        thumb={thumb}
        title={client}
        categories={categories}
        toggleExpanded={toggleExpanded}
      />
      <ContentHolder
        i={id}
        expanded={expanded}
        // toggleExpanded={toggleExpanded}
        gridArea="contentHolder"
        children={children}
        proj={proj} />
    </React.Fragment>
  )
}

const Projects = ({ offset }: { offset: number }) => {

  const [projects, setProjects] = useContext(ProjectContext)
  const [expanded] = useToggleContext(ExpandedContext)


  const isOpen = expanded === 0

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
            <ProjectFilter />
          </Inner>
          <Inner sx={{ display: 'none' }}>
            Test
          </Inner>
          <Inner>
            <div sx={{
              position: 'relative',
              zIndex: 1,
              display: [`block`, null, `grid`],
              gridGap: !isOpen ? [4, 4, 4, 5] : [6, 6, 6, 6,],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              gridTemplateAreas: `". ." "holder holder" ". ."`,
            }}
            >
              {projects.map((project) => (
                <RenderProject key={project.id} proj={project}>
                  <div
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >

                  </div>
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
