import React, { useContext } from 'react';
import Header from '../components/Header';
import '../styles/Contact.css';
import copy from 'clipboard-copy';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ThemeContext from '../context/ThemeContext';
import { Button } from 'react-bootstrap';
import LanguageContext from '../context/LanguageContext';

function Contact() {
  const { isDarkTheme } = useContext(ThemeContext);
  const { isEnglish } = useContext(LanguageContext);

  const emailClick = () => {
    copy('joanamdsantos1@gmail.com');
    alert(isEnglish ? 'Email copied on clipboard' : 'Email copiado no clipboard');
  }

  return (
    <div className="contact-page">
      <Header />
      <h1>{isEnglish ? 'Contact' : 'Contato'}</h1>
      <Card style={{ width: '30rem' }} variant={ isDarkTheme ? 'dark' : 'light'}>
        <ListGroup>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}>
              <MdEmail style={{ color: '#F14133' }} />
              <Button variant="link" onClick={emailClick} className="email">
                joanamdsantos1@gmail.com
              </Button>
          </ListGroup.Item>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}>
            <FaLinkedin style={{ color: '#0078B8' }} />
            <a href="https://www.linkedin.com/in/dev-joanamds/" target="_blank" rel="noopener noreferrer">
              <Button className="linkedin">
                Linkedin
              </Button>
            </a>
          </ListGroup.Item>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}>
            <FaGithub style={{ color: 'black' }} />
            <a href="https://github.com/joanamds" target="_blank" rel="noopener noreferrer">
              <Button variant="dark">
                Github
              </Button>
            </a>
          </ListGroup.Item>
          </ListGroup>
        </Card>
    </div>
  );
}

export default Contact;