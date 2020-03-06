/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useSpring, animated } from "react-spring"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {

  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, -400, 0)' },
    config: { duration: 2000 }
  })

  return (
    <animated.a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      style={{ opacity: 1, ...props, }}
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
    </animated.a>
  )
}

export default ProjectCard
