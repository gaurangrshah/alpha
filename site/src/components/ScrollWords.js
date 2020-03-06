import React, { useState, useRef } from 'react';
import { useTransition, animated, config } from 'react-spring'
import { useInterval } from '../hooks/useInterval'
import { shortid } from '../utils'

const defaultItems = [
  { id: 1, text: 'design systems' },
  { id: 2, text: 'apps' },
  { id: 3, text: 'businesses' },
  { id: 4, text: 'brands' },
]

const ITERATION_COUNT = 120

export function ScrollWords({ scrollItems = defaultItems, offsetLeft = 0 }) {
  const ref = useRef(0)
  const [items, set] = useState([scrollItems[0]])
  const [currCount, setCurrCount] = useState(0)

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
      color: 'orange'
    },
    leave: {
      transform: 'translate3d(0,-100px,0)',
      opacity: 0,
      color: 'darkGray'
    },
    config: config.wobbly,
  })

  return transitions.map(({ item, props, key }) => {

    return (
      <span>
        <animated.span className='item-roll' key={key} style={props}>
          {item.text}
        </animated.span>
      </span>
    )
  })

}
