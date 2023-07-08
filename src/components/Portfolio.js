import { Blackbackground } from './styles/AboutMe.styled';
import { Heading } from './styles/Contact.styled';
import { ProjectCard, Projects } from './styles/Portfolio.styled';
import project1 from './meet.webp';
import project2 from './iCloud-Photos-Mockup.webp';
import project3 from './Perfect-Pair-Mockup.webp';
import project4 from './Blog-Template-Mockup.webp';


const Portfolio = () => {

  const projects = [
    {
      image: project1,
      projectname: 'Meet Website',
      projectlink: 'https://emmakd2047.github.io/Meet-Website/'
    },
    {
      image: project2,
      projectname: 'iCloud Photos',
      projectlink: 'https://emmakd2047.github.io/iCloud-Photos-Redesign/'
    },
    {
      image: project3,
      projectname: 'Perfect Pair',
      projectlink: 'https://emmakd2047.github.io/Perfect-Pair/'
    },
    {
      image: project4,
      projectname: 'Blog Template',
      projectlink: 'https://emmakd2047.github.io/Blog-Template/'
    }
  ]

  return (
    <>    
      <Blackbackground>
        <Heading>
          <h1 style={{borderBottom:'3px solid #7d01a8', width: '150px', margin: 'auto'}}>Portfolio</h1>
        </Heading>
        <Projects>
          {projects.map(({image, projectname, projectlink}) => (
            <a href={projectlink} target='_blank' rel='noreferrer'>
              <ProjectCard>
              <img className='projectimage' src={image} alt={projectname}/>
              <div className='overlay'>
                <div className='text'>{projectname}</div>
              </div>
            </ProjectCard>
            </a>
          ))}
        </Projects>
      </Blackbackground>
    </>
  )
}

export default Portfolio