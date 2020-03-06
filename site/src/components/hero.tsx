/** @jsx jsx */
import { jsx } from "theme-ui"
import { Shapes1 } from './Shapes/shapes1'
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import Intro from "../sections/intro"
import { Tagline } from "./Tagline"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Shapes1 offset={offset} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
        <Tagline
          tagline='We help build'
        // scrollItems={['hello', 'my baby', 'hello', 'my darling']}
        />
      </Inner>
    </Content>
  </div>
)

export default Hero
