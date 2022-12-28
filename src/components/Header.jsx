import { ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowLeft, FaHome, FaPhone } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { readTheme, saveTheme } from '../services/localStorage';


function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const history = useHistory();

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); 
    saveTheme(!isDarkTheme);
    console.log(!isDarkTheme);
  }

  useEffect(() => {
    const currentTheme = readTheme();
    setIsDarkTheme(currentTheme);
  }, []);

  return (
      <Navbar bg={ isDarkTheme? 'dark' : 'light'} className="header-container">
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
        <ButtonGroup
          className="theme"
          onClick={ toggleTheme }
        >
          {isDarkTheme && <BsSunFill style={ { color: 'white' } } />}
        {!isDarkTheme && <BsMoonFill />}
        </ButtonGroup>
      </Container>
      </Navbar>
  );
}

export default Header;