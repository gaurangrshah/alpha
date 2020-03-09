import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTransition, animated, config } from 'react-spring'
import Divider from '../elements/divider'
import Inner from '../elements/Inner'


export default function Drawer({ isOpen, children }) {
  const transitions = useTransition(isOpen, null, {
    // transform: isOpen ? 'translateY(-100%)' : 'translateY(0)',
    from: { marginBottom: '-100%' },
    enter: { marginBottom: '0' },
    leave: { marginBottom: '-100%' },
    config: config.wobbly
    // flex: isOpen ? 1 : 0,
    // display: isOpen ? 'flex' : 'none',
  })

  return transitions.map(({ item, key, props }) => (
    item && (
      <animated.div
        key={key}
        style={props}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: 'calc(100% - 19px)',
          height: ['30%'],
          minHeight: ['30%'],
          p: 3,
          bg: 'gray.8',
          boxShadow: 'shadowTop'
        }}
      >
        <Inner>
          {children}Hello
        </Inner>
      </animated.div>
    )
  ))
}
