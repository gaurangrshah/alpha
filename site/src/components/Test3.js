import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTransition, animated, config } from 'react-spring'
import { useInterval } from '../hooks/useInterval'


const defaultItems = [
  { id: 2, text: 'apps' },
  { id: 3, text: 'businesses' },
  { id: 4, text: 'brands' },
]

const INITIAL_VALUE = { id: 1, text: 'design systems' }
const ITERATION_COUNT = 200

export function Test3({ scrollItems = defaultItems }) {
  const ref = useRef(0)
  const [items, set] = useState([INITIAL_VALUE])
  const [currCount, setCurrCount] = useState(0)

  useInterval(() => {
    if (ref.current === ITERATION_COUNT) return null
    if (currCount !== defaultItems.length) {
      set(scrollItems[currCount])
      setCurrCount(currCount + 1)
      ref.current += 1
    } else {
      set(INITIAL_VALUE)
      setCurrCount(0)
      ref.current += 1
    }
  }, 2500)

  const transitions = useTransition(items, item => item.id, {

    from: { position: 'absolute', top: '0px', left: '230px', transform: 'translate3d(0, 100px,0)', opacity: 0, color: 'white' },
    enter: { transform: 'translate3d(0, 0px,0)', opacity: 1, color: 'orange' },
    leave: { transform: 'translate3d(0,-100px,0)', opacity: 0, color: 'darkGray' },
    config: config.wobbly,
  })
  return transitions.map(({ item, props, key }) =>
    <animated.div className='item-roll' key={key} style={{ ...props }}>{item.text}</animated.div>
  )

}
