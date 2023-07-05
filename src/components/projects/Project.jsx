import { AiFillGithub } from "react-icons/ai";
import "./styles.css"


const Project = ({project}) => {
  console.log(project.img)
  return (
  <a href="sitio.com">  <div className="box-project"
     style={{
      backgroundImage:  `url(${project.img})`,

          }} >
<h3>
  {project.title}
</h3>

<a href="otr.conm"><AiFillGithub size={30} className="icon-git"/> </a>


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