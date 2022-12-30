import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';
import { FaGithub, FaFileCode } from "react-icons/fa";

function ProjectCard({ projectName, projectImage, projectPage, projectRepo, projectDescription }) {
  return (
    <Card style={{ width: '45rem' }}>
      <Card.Img variant="top" src={ projectImage } />
      <Card.Body>
        <Card.Title>{ projectName }</Card.Title>
        <Card.Text>
          { projectDescription }
        </Card.Text>
        <div className="buttons-card">
          <Card.Link href={projectPage} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary"><FaGithub />Github Page</Button>
          </Card.Link>
          <Card.Link href={projectRepo} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary"><FaFileCode />Repositório</Button>
          </Card.Link>
        </div>
      </Card.Body>
      </Card>
  );
}

export default ProjectCard;