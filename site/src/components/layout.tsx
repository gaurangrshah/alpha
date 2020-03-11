/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { css, Styled, jsx } from "theme-ui"
import SEO from "./seo"
import "../styles/main.scss"
import Info from './Drawer/Info' // 🚧 fix info import
type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `border-box`,
          "&:before": {
            boxSizing: `border-box`,
          },
          "&:after": {
            boxSizing: `border-box`,
          },
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
          overflow: 'hidden',
          '& #portal': {
            mx: 'auto',
            boxShadow: 'shadowTop',
            maxWidth: '100%',

          }
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
      })}
    />
    <SEO />
    <main className={className}>
      {children}
    </main>
    <Info />
  </Styled.root>
)

export default Layout
