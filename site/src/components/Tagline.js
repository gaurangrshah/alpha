/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'


export const Tagline = ({ children }) => {
  return (
    <div style={{ zIndex: -3, position: 'relative' }}>
      <span style={{ fontSize: '48px', fontWeight: 400 }}>
        I help build
        <span>{children}</span>
      </span>
    </div>
  )
}



