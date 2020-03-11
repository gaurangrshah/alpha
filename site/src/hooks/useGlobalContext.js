import { useContext } from 'react'

export const useToggleContext = (context) => {
  const [getter, setGetter] = useContext(context)
  const toggleGetter = (id) => setGetter(getter ? 0 : id)
  return [getter, toggleGetter]
}

