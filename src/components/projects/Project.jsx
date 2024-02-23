import { AiFillGithub } from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi"
import {FiFigma} from "react-icons/fi"
import "./styles.css"


const Project = ({project}) => {

  return (
  <a href={project.linkProject} target="_blank"  rel="noreferrer">  <div className="box-project"
     style={{
      backgroundImage:  `url(${project.img})`,

          }} >
<h3>
  {project.title}
</h3>
{ project.linkGit !== "https://www.figma.com/file/8kDw56dYpYmXIkbw6YEanc/taco-food-truck-app?type=design&node-id=0-1&mode=design&t=d3mkmvQFoVHSxMKO-0" ?
<div className="icons">
<a href={project.linkProject}><BiLinkExternal size={30} className="icon-git" /></a>
<a href={project.linkGit}><AiFillGithub size={30} className="icon-git"/> </a></div>
 :
 <div className="icons">
 <a href={project.linkProject}><BiLinkExternal size={30} className="icon-git"/></a>
  <a href={project.linkGit}><FiFigma size={30} className="icon-git"/></a> 
  </div>
}



<p>
{project.description}
</p>
    </div>
    </a>
  );
};

export default Project;

/*
<h2>Titulo proyecto</h2>
<p>
  At vero eos et accusamus et iusto odio dignissimos ducimus qui
  blanditiis praesentium voluptatum deleniti 
</p>

<div className="link-projects" >
  <span>GitHub</span>
  <span>Visit project</span>
</div>*/