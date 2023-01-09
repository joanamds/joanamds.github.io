import React, { useContext } from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Projects.css'
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';



function Projects() {
  const { isDarkTheme } = useContext(ThemeContext);
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="projects-page">
      <Header />
      <h1>{ isEnglish ? 'Projects' : 'Projetos'}</h1>
      <div className="carousel-container">
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