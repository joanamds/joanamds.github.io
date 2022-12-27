import { ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowLeft, FaHome, FaPhone } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import './Header.css'

function Header() {
  const history = useHistory();

  return (
      <Navbar bg="light" className="header-container">
      <Container>
        <ButtonGroup onClick={ () => history.goBack() }>
          <FaArrowLeft />
        </ButtonGroup>
        <ButtonGroup onClick={() => history.push('/')}>
          <FaHome />
        </ButtonGroup>
        <Navbar.Brand>
          Portfólio de Joana Maria dos Santos
        </Navbar.Brand>
        <ButtonGroup onClick={() => history.push('/contact')}>
          <FaPhone />
        </ButtonGroup>
      </Container>
      </Navbar>
  );
}

export default Header;