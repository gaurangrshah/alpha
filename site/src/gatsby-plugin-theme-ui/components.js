import React from "react"
import ProjectCard from "../components/project-card"
import Card from "../components/Card"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
      <p>new</p>
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  Card: ({ to, thumb, thumbBg, cardBg, title, categories, children }) => (
    <Card to={to} thumb={thumb} thumbBg={thumbBg} cardBg={cardBg} title={title} categories={categories}>
      {children}
      <p>new</p>
    </Card>
  ),

}
