import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTransition, animated, config } from 'react-spring'


export default function Drawer({ isOpen, children }) {
  const transitions = useTransition(isOpen, null, {
    from: { marginBottom: '-100%' },
    enter: { marginBottom: '0' },
    leave: { marginBottom: '-100%' },
    config: config.wobbly
  })

  return transitions.map(({ item, key, props }) => (
    item && (
      <animated.div
        key={key}
        style={props}
        sx={{
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50.5%)',
          width: '95%',
          height: ['30%'],
          minHeight: ['30%'],
          borderRadius: 'lg',
          bg: 'gray.8',
          p: 3,
        }}
      >
        {children}
      </animated.div>
    )
  ))
}
