import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from 'react-icons/fa';

function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <FaHome />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;