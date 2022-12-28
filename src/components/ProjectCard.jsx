import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';

function ProjectCard({ projectName, projectImage, projectPage, projectRepo, projectDescription }) {
  return (
    <Card>
      <Card.Img variant="top" src={ projectImage } />
      <Card.Body>
        <Card.Title>{ projectName }</Card.Title>
        <Card.Text>
          { projectDescription }
        </Card.Text>
        <Button onClick={ projectPage }>Github Page</Button>
        <Button onClick={ projectRepo }>Repositório</Button>
      </Card.Body>
      </Card>
  );
}

export default ProjectCard;