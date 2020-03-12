import { useContext } from 'react'

export const useToggleContext = (context) => {
  const [toggle, setToggle] = useContext(context)
  const toggleToggle = (id) => {
    if (id) {
      toggle === 0 && setToggle(id)
      if (id !== toggle) {
        return setToggle(id)
      }
    }

    // 🚧 FIXME: handle no-id when panel close. --- behavior works, logic needs cleanup
    if (typeof toggle === 'number' && toggle !== 0) {
      return setToggle(0)
    }

    setToggle(!toggle)
  }
  return [toggle, toggleToggle, setToggle,]
}
