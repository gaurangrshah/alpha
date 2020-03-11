import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import { ExpandedContextProvider, ProjectContextProvider } from "../context/project-context"
import Hero from "../components/hero"
import Projects from "../components/projects" // 🚧 Fix Import
import About from "../components/about"
import Contact from "../components/contact"
// import Info from "../components/Drawer/Info"


const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} />
      <About offset={3} />
      <ProjectContextProvider>
        <ExpandedContextProvider>
          <Projects offset={1} />
        </ExpandedContextProvider>
      </ProjectContextProvider>
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default Cara
