import React, { useContext } from 'react';
import Header from '../components/Header';
import '../styles/Contact.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ThemeContext from '../context/ThemeContext';

function Contact() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="contact-page">
      <Header />
      <h1>Contato</h1>
      <Card style={{ width: '30rem' }} variant={ isDarkTheme ? 'dark' : 'light'}>
        <ListGroup>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}>
            <div className="email-item">
              <MdEmail style={{ color: '#F14133' }} />
              <p className="email">joanamdsantos1@gmail.com</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}><FaLinkedin style={{ color: '#0078B8' }} /></ListGroup.Item>
          <ListGroup.Item variant={isDarkTheme ? 'dark' : 'light'}><FaGithub style={{ color: 'black' }} /></ListGroup.Item>
          </ListGroup>
        </Card>
    </div>
  );
}

export default Contact;