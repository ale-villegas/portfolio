import { useContext } from 'react'
import { LenguageContext } from '../../context/LenguageContext'
import Project from './Project'
import projects from '../../utils/projects'

const Projects = () => {
    const {text} = useContext(LenguageContext)
  return (
 
<section className='complete-box'>
    
    <h1 className='project-title'>
        {text.portafolio}
    </h1>  

<div className="projects">
   {
    projects.map((project => {
      return (
       
        <Project key={project.title} project={project} />
        
      )
    }))
   }

    </div>
    </section>
  )
}

export default Projects