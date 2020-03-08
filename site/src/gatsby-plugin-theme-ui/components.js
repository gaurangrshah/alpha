import React from "react"
// import ProjectCard from "../components/project-card"
import Card from "../components/Card"
import ScrollWords from "../components/ScrollWords"
import Tagline from "../components/Tagline"

export default {
  // eslint-disable-next-line react/display-name
  Card: ({ to, thumb, title, categories, children }) => (
    <Card to={to} thumb={thumb} title={title} categories={categories}>
      {children}
    </Card>
  ),
  // eslint-disable-next-line react/display-name
  Tagline: ({ tagline, scrollItems, offsetLeft, children }) => (
    <Tagline tagline={tagline} scrollItems={scrollItems} offsetLeft={offsetLeft}>
      {children}
    </Tagline>
  ),
  // eslint-disable-next-line react/display-name
  ScrollWords: ({ scrollItems, offsetLeft }) => (
    <ScrollWords scrollItems={scrollItems} offsetLeft={offsetLeft} />
  ),

}
