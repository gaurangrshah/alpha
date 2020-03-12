import { useContext } from 'react'

export const useToggleContext = (context) => {
  const [toggle, setToggle] = useContext(context)
  const toggleToggle = (id) => {
    console.log('init toggle')
    if (id) {
      console.log('first check -- id found', id)
      toggle === 0 && setToggle(id)
      if (id !== toggle) {
        console.log('second check -- id/toggle', id, toggle)
        return setToggle(id)
      }
    }

    // 🚧 FIXME: handle no-id when panel close. --- behavior works, logic needs cleanup
    if (typeof toggle === 'number' && toggle !== 0) {
      console.log('race-- no id // toggle === 0', toggle)
      return setToggle(0)
    }

    console.log('no id / pre-toggle:', toggle)
    setToggle(!toggle)
  }
  return [toggle, toggleToggle, setToggle,]
}

// used as a toggle component
