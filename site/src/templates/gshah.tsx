import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Projects from "../components/projects"
import { Projects2 } from "../components/projects2"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} />
      <About offset={3} />
      <Projects offset={1} />
      <Projects2 offset={2} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default Cara
