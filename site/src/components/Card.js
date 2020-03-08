import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Box, Image, Heading, Text } from "@theme-ui/components"

import { categoryColor } from "../styles/utils"
import aaryaa from "../assets/images/aaryaa_icon.png"


const Card = ({
  to = "#0",
  thumb = "",
  thumbBg = "#0D0F28",
  cardBg = "#1F2464",
  title = 'Project Title',
  categories = ['branding', 'app', 'design'],
  children = {},
  ...props
}) => (
    <a
      as={Link}
      // href={to}
      target="_blank"
      rel="noreferrer noopener"
      sx={linkStyles}
    >
      <Box sx={cardStyles(cardBg)}>
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
                sx={{
                  ...categoryStyles(categoryColor(categories[i])),
                  // bg: categoryColor(categories[i]),
                  // filter: 'saturate(0.6)',
                }}
              >
                {cat}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </a >
  )

export default Card

const linkStyles = {
  textDecoration: `none`,
  color: 'white',
  px: 2,
}

const cardStyles = (cardBg) => ({
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
  background: cardBg || `none`,
  transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
  "&:hover": {
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
  bg: thumbBg,
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
