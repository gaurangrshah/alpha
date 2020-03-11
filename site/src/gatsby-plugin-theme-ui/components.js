import React from "react"
import Card from "../components/Project/Card" //🚧 Fix Imports
import ScrollWords from "../components/Tagline/ScrollWords" //🚧 Fix Imports
import Tagline from "../components/Tagline/Tagline" //🚧 Fix Imports
import Accordion from "../components/accordion" //🚧 Fix Imports

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

  // // eslint-disable-next-line react/display-name
  // Accordion: ({ i, expanded, setExpanded, children }) => (
  //   <Accordion i={i}
  //     expanded={expanded}
  //     setExpanded={setExpanded}
  //     children={children}
  //   />
  // ),

}
