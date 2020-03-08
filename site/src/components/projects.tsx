/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Text } from "@theme-ui/components"

import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectFilter from "../components/ProjectFilter"

import { Shapes2 } from "../components/Shapes"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

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
        <Inner
          sx={{
            width: '100%',
            display: ['flex'],
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'baseline',
            '& h2': {
              flex: 1,
            }
          }}
        >
          <h2>PROJECTS</h2>
          <ProjectFilter />
        </Inner>
        <Inner>
          <div sx={{
            zIndex: 1,
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `heading`, variant: 'text.large' },
          }}
          >
            <ProjectsMDX />
          </div>
        </Inner>
      </Content>
      <Shapes2 offset={offset} />
    </div >
  )
}

export default Projects
