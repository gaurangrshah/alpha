import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { categories } from "../../../styles/utils"

export const FilterLg = ({ showCats, reset, toggleShowCats, filter }) => (
  <ul sx={{
    position: 'fixed',
    display: ['flex'],
    flexDirection: ['column', null, null, 'row'],
    background: 'rgba(0,0,0,0.2)',
    listStyleType: 'none',
    transform: showCats && 'translate3d(-100%, -100%, 0)',
    transition: 'transform 0.35 ease-in',
    zIndex: 3,
  }}>
    <li onClick={reset}><a>all</a></li>
    {categories.length && categories.map((cat, i) => (
      <li
        key={`${i}-${cat.id}`}
        onClick={() => filter(cat)}
        style={{
          textDecoration: 'none',
          padding: '0 4px',
        }}
      >
        <a href={'#0'}>
          {cat}
        </a>
      </li>
    ))}
    <span
      className='fa-stack fa-2x'
      onClick={toggleShowCats}
      style={{ fontSize: '0.6em', color: 'red', padding: '8px 3px' }}
    >
      <i className='fas fa-circle fa-stack-2x'></i>
      <i className='fas fa-times fa-stack-1x fa-inverse'></i>
    </span>
  </ul>
)
