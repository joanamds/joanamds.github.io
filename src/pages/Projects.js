import React, { useContext } from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Projects.css'
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ThemeContext from '../context/ThemeContext';



function Projects() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="projects-page">
      <Header />
      <div className="carousel-container">
        <Carousel slide={false} variant={ isDarkTheme? 'light' : 'dark'}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.title}
              projectImage={project.image}
              projectPage={project.page}
              projectRepo={project.repo}
              projectDescription={project.description}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;