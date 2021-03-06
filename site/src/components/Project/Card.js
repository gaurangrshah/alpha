import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Box, Image, Heading, Text } from "@theme-ui/components"
import { categoryColor } from "../../styles/utils"
import aaryaa from "../../assets/images/aaryaa_icon.png"


const Card = ({
  to = "#0",
  id = 0,
  thumb = "",
  title = 'Project Title',
  categories = ['branding', 'app', 'design'],
  open = false,
  toggleExpanded,
  children = {},
  ...props
}) => {

  const context = useThemeUI()
  const { theme, colorMode } = context
  const thumbBg = colorMode === 'dark' ? "#141821" : "#D3D5ED"

  return (
    <a
      sx={linkStyles}
      onClick={() => toggleExpanded(id)}
    >
      <Box sx={{ ...cardStyles(open) }}>
        <Box sx={cardImgStyles(thumbBg)}>
          <Image src={aaryaa} />
        </Box>
        <Heading as="h3" sx={{}}>{title}</Heading>
        <Box sx={categoryBoxStyles}>
          <Box as="span">
            {categories.map((cat, i) => (
              <Text
                as="p"
                key={i}
                sx={{ ...categoryStyles(categoryColor(categories[i])) }}>
                {cat}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </a >
  )
}

export default Card

const linkStyles = {
  textDecoration: `none`,
  color: 'white',
  px: 2,
}

const cardStyles = (open) => ({
  cursor: 'pointer',
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  width: `100%`,
  maxWidth: '600px',
  minHeight: `300px`,
  boxShadow: `lg`,
  position: `relative`,
  borderRadius: `lg`,
  px: 3,
  py: [2, 3],
  fontSize: [4, 5],
  fontWeight: `medium`,
  lineHeight: 1,
  bg: !open ? 'alphaBlue' : 'alphaYellow',
  transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
  "&:hover": {
    cursor: 'pointer',
    bg: !open ? 'alpha' : 'alphaBlue',
    color: `white !important`,
    transform: `translateY(-10px)`,
    boxShadow: `xl`,
  },
  '& h3': {
    my: 3,
    py: 3,
  }
})

const cardImgStyles = (thumbBg) => ({
  position: 'relative',
  bg: 'darkGray',
  borderRadius: `lg`,
  textTransform: `uppercase`,
  letterSpacing: `wide`,
  p: '4',
  '& img': {
    display: 'block',
    m: 'auto',
    width: '40%',
  }
})

const categoryBoxStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  '& span': {
    display: 'flex',
  }
}

const categoryStyles = (categoryColor) => ({
  mx: '2px',
  fontSize: [1],
  padding: 1,
  borderRadius: 'lg',
  bg: categoryColor,
  filter: 'saturate(0.6)',
})
