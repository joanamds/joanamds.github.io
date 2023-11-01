import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Projects.css'
import { projectsBack } from '../data/backendProjects';
import { projectsFront, projectsFundamentals, personalProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import '../styles/Title.scss';

function Projects(): JSX.Element {
  const { isDarkTheme } = useContext(ThemeContext);
  const { isEnglish } = useContext(LanguageContext);
  const [module, setModule] = useState('fundamentals');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    switch (module) {
      case 'fundamentals':
        setProjects(projectsFundamentals)
        break;
      case 'frontend':
        setProjects(projectsFront)
        break;
      case 'backend':
        setProjects(projectsBack)
        break;
      case 'personal':
        setProjects(personalProjects)
        break;
      default:
        setProjects([]);
    }
  }, [module]);

  return (
    <div className="projects-page" id="projects">
      <div className="carousel-container">
        <div className="typewriter">
      <h1>{isEnglish ? 'Developed projects' : 'Projetos desenvolvidos'}</h1>
      </div>
      <Dropdown className="dropdown-css">
        <Dropdown.Toggle variant={ isDarkTheme ? 'dark' : 'light' } id="dropdown-basic">
          {isEnglish ? 'Module' : 'Módulo'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setModule('fundamentals')}>
            { isEnglish? 'Fundamentals': 'Fundamentos do Desenvolvimento Web' }
          </Dropdown.Item>
          <Dropdown.Item onClick={ () => setModule('frontend') } >Front End</Dropdown.Item>
          <Dropdown.Item onClick={() => setModule('backend')}>Back End</Dropdown.Item>
          <Dropdown.Item onClick={() => setModule('personal')}>
            {isEnglish ? 'Personal projects' : 'Projetos pessoais'}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <Carousel interval={ null } variant={isDarkTheme ? 'light' : 'dark'}>
          {projects.map((project, index) => (
          <Carousel.Item>
            <ProjectCard
              key={index}
              projectName={project.title}
              projectImage={project.image}
              projectPage={project.page}
              projectRepo={project.repo}
              projectDescription={ isEnglish ? project.descriptionENG : project.description}
            />
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;