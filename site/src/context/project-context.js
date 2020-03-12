import React, { useState, useEffect, useCallback } from 'react'
import ProjectFilter from '../components/Project/ProjectFilter';

const projs = [
  { id: 1, thumb: "", client: 'Aarya', categories: ['app', 'branding'] },
  { id: 2, thumb: "", client: 'Aarya', categories: ['app', 'branding'] },
  { id: 3, thumb: "", client: 'Aarya', categories: ['app', 'branding'] },
  { id: 4, thumb: "", client: 'Aarya', categories: ['app', 'branding'] },
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
    console.log('expanded', expanded)
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
  useEffect(() => {
    console.log('projects', projects)
  }, [projects])

  return (
    // passes in the getter and setter for state into value
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider >
  )

}


export { projs, ExpandedContext, ExpandedContextProvider, ProjectContext, ProjectContextProvider }

