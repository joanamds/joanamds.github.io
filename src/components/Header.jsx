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
            <span className="tooltiptext">Voltar</span>
          </ButtonGroup>
        <ButtonGroup onClick={() => history.push('/')}>
          <FaHome />
          <span className="tooltiptext">Voltar ao início</span>
        </ButtonGroup>
        <Navbar.Brand>
          Portfólio
        </Navbar.Brand>
        <ButtonGroup onClick={() => history.push('/contact')}>
          <FaPhone />
          <span className="tooltiptext">Contato</span>
        </ButtonGroup>
        <ButtonGroup
          className="theme"
          onClick={ toggleTheme }
        >
          {isDarkTheme && (
            <>
              <BsSunFill style={ { color: 'yellow' } } />
              <span className="tooltiptext">Ativar o modo claro</span>
            </>
          )}
          {!isDarkTheme
            && (
            <>
              <BsMoonFill style={{ color: 'blue' }} />
              <span className="tooltiptext">Ativar o modo escuro</span>
            </>
            )}
        </ButtonGroup>
      </Container>
      </Navbar>
  );
}

export default Header;