import { useContext } from 'react'
import { LenguageContext } from '../context/LenguageContext'

const Projects = () => {
    const {text} = useContext(LenguageContext)
  return (
    <div className="projects">

    
    <h1>
        {text.projects}
    </h1>
    </div>
  )
}

export default Projects