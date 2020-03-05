import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTransition, animated } from 'react-spring'
import Inner from "../elements/inner"
import Content from "../elements/content"

// https://newfivefour.com/react-spring-transitions.html

export function Test2() {
  const ref = useRef([])
  const [items, set] = useState([])

  const transitions = useTransition(items, null, {
    from: { opacity: 0, color: '#8fa5b6' },
    enter: [
      { opacity: 1, },
      // { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      // { transform: 'translateY(-100px)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['grow']), 2000))
    ref.current.pop(setTimeout(() => set([]), 5000))
    ref.current.push(setTimeout(() => set(['deliver results']), 7000))
    ref.current.pop(setTimeout(() => set([]), 7000))
    ref.current.push(setTimeout(() => set(['scale']), 6000))
  }, [])

  useEffect(() => void reset(), [])

  return transitions.map(({ item, props: { ...rest }, key }) => (
    <animated.span className="transitions-item" key={key} style={rest} onClick={reset}>
      <animated.h2 style={{ overflow: 'hidden', zIndex: -1, }}>
        {item}
      </animated.h2>
    </animated.span>
  ))
}


