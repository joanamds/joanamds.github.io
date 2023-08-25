import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {  FaPaste, FaPhoneAlt, FaPortrait, FaTools } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import '../styles/Header.css';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { readTheme, saveTheme } from '../services/localStorage';
import LanguageContext from '../context/LanguageContext';
import Bra from '../images/brazil-flag-icon.svg';
import UK from '../images/united-kingdom-flag-icon.svg';
import { Button, Modal} from 'react-bootstrap';
import Contact from './ContactModal';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);

  const [isShow, invokeModal] = useState(false)

  const initModal = () => {
    if (isShow) {
      return invokeModal(false)
    }
    return invokeModal(true);
  }

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); 
    saveTheme(!isDarkTheme);
  }

  useEffect(() => {
    const currentTheme = readTheme();
    setIsDarkTheme(currentTheme);
  }, []);

  return (
      <Navbar bg={ isDarkTheme? 'dark' : 'light'} className="header-container">
      <Container>
        <Nav.Link href="#aboutme">
          <div className="icon-tooltip-container"> {/* Add this div */}
            <FaPortrait className="menu-icon" />
            <span className="tooltiptext">{isEnglish ? 'About Me' : 'Sobre mim'}</span>
          </div>
        </Nav.Link>
        <Nav.Link href="#tools">
          <div className="icon-tooltip-container"> {/* Add this div */}
            <FaTools className="menu-icon" />
            <span className="tooltiptext">{isEnglish ? 'Tools and Technologies' : 'Tecnologias e Ferramentas'}</span>
          </div>
        </Nav.Link>
        <Nav.Link href="#projects">
          <div className="icon-tooltip-container"> {/* Add this div */}
            <FaPaste className="menu-icon" />
            <span className="tooltiptext">{isEnglish ? 'Projects' : 'Projetos'}</span>
          </div>
        </Nav.Link>
        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}>
              <Modal.Title>{isEnglish ? 'Contact' : 'Contato'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Contact />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={initModal}>
                { isEnglish ? 'Close' : 'Fechar'}
              </Button>
            </Modal.Footer>
          </Modal>
        <Navbar.Brand>
          Portfolio
        </Navbar.Brand>
        <Nav.Link onClick={initModal}>
          <div className="icon-tooltip-container"> {/* Add this div */}
            <FaPhoneAlt className="menu-icon" />
            <span className="tooltiptext">{isEnglish ? 'Contact' : 'Contato'}</span>
          </div>
        </Nav.Link>
        <Dropdown className="dropdown-css">
        <Dropdown.Toggle variant={ isDarkTheme ? 'dark' : 'light' } id="dropdown-basic">
          { isEnglish ? 'Language' : 'Idioma' }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsEnglish(true)}>
            <img src={UK} alt="UK flag" width="30" />
              English
          </Dropdown.Item>
            <Dropdown.Item onClick={() => setIsEnglish(false)} >
              <img src={Bra} alt="brazil flag" width="30" />
                Português(BRA)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <Nav.Link 
          variant="theme"
          onClick={ toggleTheme }
        >
          {!isDarkTheme && (
            <>
              <BsMoonFill className="toggle-dark"/>
              <span className="tooltiptext">{ isEnglish ? 'Dark theme' : 'Ativar modo escuro'}</span>
            </>
          )}
          {isDarkTheme
            && (
            <>
              <BsSunFill className="toggle-light"/>
              <span className="tooltiptext">{ isEnglish ? 'Light theme' : 'Ativar modo claro'}</span>
            </>
            )}
        </Nav.Link>
      </Container>
      </Navbar>
  );
}

export default Header;