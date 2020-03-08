/** @jsx jsx */
import { jsx } from "theme-ui"
import { Shapes1 } from './Shapes/shapes1'
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import { BrandMark } from "./Brand"
import TaglineMDX from "../sections/tagline"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Shapes1 offset={offset} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <BrandMark offset={offset} />
      <Inner>
        <TaglineMDX tagline="We Built" />
      </Inner>
    </Content>
  </div>
)

export default Hero
