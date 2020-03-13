import React, { useState, useEffect, useCallback } from 'react'
import ProjectFilter from '../components/Project/ProjectFilter';

const projs = [
  { id: 1, thumb: "", client: 'Aarya', categories: ['design', 'marketing'] },
  { id: 2, thumb: "", client: 'Aarya', categories: ['app', 'branding'] },
  { id: 3, thumb: "", client: 'Aarya', categories: ['development', 'branding'] },
  { id: 4, thumb: "", client: 'Aarya', categories: ['app', 'design'] },
]

const ExpandedContext = React.createContext([0, () => { }])
const ProjectContext = React.createContext([...projs])
// passing in empty values in the array to be used as destructured getters and setters below


const ExpandedContextProvider = (props) => {
  /*  getter and setter */
  const [expanded, setExpanded] = useState(0);

  const toggleExpanded = id => setExpanded(expanded ? 0 : id)
  // const [selected, setSelected] = useState(0);
  // const updateSelected = () => setSelected(!selected)
  useEffect(() => {
    // console.log('expanded', expanded)
  }, [expanded])

  return (
    // passes in the getter and setter for state into value
    <ExpandedContext.Provider value={[expanded, setExpanded]}>
      {props.children}
    </ExpandedContext.Provider >
  )
}


const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([...projs])

  const resetProjectsFilter = () => setProjects([...projs])

  const filterProjects = (term) => {
    if (!term) return
    resetProjectsFilter()
    const matches = projs.filter(proj => proj.categories.includes(term))
    // console.log('matches', matches)
    return setProjects(matches)
  }

  useEffect(() => {
    console.log('projects', projects)
  }, [projects])

  return (
    // passes in the getter and setter for state into value
    <ProjectContext.Provider
      value={[projects, setProjects, filterProjects, resetProjectsFilter]}>
      {props.children}
    </ProjectContext.Provider >
  )

}


export { projs, ExpandedContext, ExpandedContextProvider, ProjectContext, ProjectContextProvider }

