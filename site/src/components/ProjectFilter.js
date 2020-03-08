import React, { useState } from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"

export default function ProjectFilter() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <span
        sx={{
          display: 'flex',
          position: 'fixed',
          top: '800px',
          right: '22em',
          p: 0,
        }}
      >
        <a
          onClick={() => setToggle(!toggle)}
          sx={{
            p: 0,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 2,
            borderBottom: !toggle && 'test'
          }}>
          filter
        </a>
        <ul sx={{
          display: toggle ? 'inline-flex' : 'none',
          listStyle: 'none',
          mt: 1,
          transform: !toggle && 'translateX(100%)',
          transition: `all 5s 0.1s ease-in`,
          '& li': {
            borderBottom: toggle && 'default',
            cursor: 'pointer',
            mr: 2,
          }
        }}>
          <li><a>all</a></li>
          <li><a>app</a></li>
          <li><a>website</a></li>
          <li><a>branding</a></li>
          <li><a>design</a></li>
          <li><a>development</a></li>
          <li><a>marketing</a></li>
        </ul>
      </span>
      <span sx={{
        '& li': {
          textDecoration: 'none',
        }
      }}>

      </span>
    </>
  )
}
