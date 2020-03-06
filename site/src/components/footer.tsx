/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"
import Logo from "../components/Brand/Logo"


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeFooter>
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          position: `relative`,
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {/* <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
        {` `} */}
        <Logo layer='mark' width='36px' left='25%' />
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 4 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
          G. Shah Dev
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
