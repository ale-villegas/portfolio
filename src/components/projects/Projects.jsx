import { useContext } from 'react'
import { LenguageContext } from '../../context/LenguageContext'
import Project from './Project'


const Projects = () => {
    const {text} = useContext(LenguageContext)
  return (
    <>
    <a name="portfolio" style={{
      paddingBottom: "50px",
    }}></a>
<section className='complete-box'>
    
    <h1 className='project-title'>
        {text.projectsTitle}
    </h1>  

<div className="projects">
   {
    text.projects.map((project => {
      return (
       
        <Project key={project.title} project={project} />
        
      )
    }))
   }

    </div>
    </section>
    </>
  )
}

export default Projects