import React from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Projects.css'
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <div className="carousel-container">
        <Carousel slide={false}>
          {projects.map((project) => (
            <ProjectCard
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