import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowLeft, FaHome, FaPhone } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { readTheme, saveTheme } from '../services/localStorage';
import LanguageContext from '../context/LanguageContext';
import Bra from '../images/brazil-flag-icon.svg';
import UK from '../images/united-kingdom-flag-icon.svg';


function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const history = useHistory();

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
          <ButtonGroup onClick={ () => history.goBack() }>
            <FaArrowLeft />
            <span className="tooltiptext">{ isEnglish ? 'Back' : 'Voltar'}</span>
          </ButtonGroup>
        <ButtonGroup onClick={() => history.push('/')}>
          <FaHome />
          <span className="tooltiptext">{ isEnglish ? 'Home' : 'Voltar ao início'}</span>
        </ButtonGroup>
        <Navbar.Brand>
          Portfolio
        </Navbar.Brand>
        <Dropdown className="dropdown-css">
        <Dropdown.Toggle variant={ isDarkTheme ? 'dark' : 'light' } id="dropdown-basic">
          Language
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
        <ButtonGroup
          variant="theme"
          onClick={ toggleTheme }
        >
          {isDarkTheme && (
            <>
              <BsSunFill style={ { color: 'white' } } />
              <span className="tooltiptext">{ isEnglish ? 'Light theme' : 'Ativar modo claro'}</span>
            </>
          )}
          {!isDarkTheme
            && (
            <>
              <BsMoonFill style={{ color: 'black' }} />
              <span className="tooltiptext">{ isEnglish ? 'Dark theme' : 'Ativar modo escuro'}</span>
            </>
            )}
        </ButtonGroup>
      </Container>
      </Navbar>
  );
}

export default Header;