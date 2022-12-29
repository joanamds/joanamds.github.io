import React from 'react';
import Header from '../components/Header';
import '../styles/Contact.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <h1>Contato</h1>
        <Card style={{ width: '30rem' }}>
          <ListGroup variant="flush">
          <ListGroup.Item><MdEmail /></ListGroup.Item>
            <ListGroup.Item><FaLinkedin /></ListGroup.Item>
            <ListGroup.Item><FaGithub /></ListGroup.Item>
          </ListGroup>
        </Card>
    </div>
  );
}

export default Contact;