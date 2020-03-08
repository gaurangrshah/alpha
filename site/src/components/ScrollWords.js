import React, { useState, useRef } from 'react';
/** @jsx jsx */
import { jsx, Box, useThemeUI } from 'theme-ui'
import { useTransition, animated, config } from 'react-spring'
import { useInterval } from '../hooks/useInterval'

const defaultItems = [
  { id: 1, text: 'user interfaces' },
  { id: 2, text: 'apps' },
  { id: 3, text: 'websites' },
  { id: 4, text: 'businesses' },
  { id: 5, text: 'brands' },
  { id: 6, text: '& more' },
]

const ITERATION_COUNT = 120

export function ScrollWords({ scrollItems = defaultItems, offsetLeft = 0 }) {
  const ref = useRef(0)
  const [items, set] = useState([scrollItems[0]])
  const [currCount, setCurrCount] = useState(0)

  const context = useThemeUI()
  const { colorMode } = context

  const modeShadow = colorMode === 'dark' ? 'neuDarkSm' : 'neuLightSm'


  useInterval(() => {
    if (ref.current === ITERATION_COUNT) return null
    if (currCount !== defaultItems.length) {
      set(scrollItems[currCount])
      setCurrCount(currCount + 1)
      ref.current += 1
    } else {
      set(scrollItems[0])
      setCurrCount(0)
      ref.current += 1
    }
  }, 2500)

  const transitions = useTransition(items, item => item.id, {
    from: {
      position: 'absolute',
      left: offsetLeft,
      transform: 'translate3d(0, 100px,0)',
      opacity: 0,
      color: 'white'
    },
    enter: {
      transform: 'translate3d(0, 0px,0)',
      opacity: 1,
      color: '#3182ce'
    },
    leave: {
      transform: 'translate3d(0, -100px,0)',
      opacity: 0,
      color: 'darkGray'
    },
    config: config.default,
  })

  return transitions.map(({ item, props: { position, left, ...rest }, key }) => {

    return (

      <animated.span key={key} style={rest}>
        <Box
          sx={{
            textShadow: modeShadow,
            position: ['absolute'],
            pl: 3,
            width: ['lg', null, null, 'xl'],
          }}
        >
          {item.text}
        </Box>
      </animated.span>

    )
  })

}
