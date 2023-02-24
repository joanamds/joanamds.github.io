import React, { useContext } from 'react';
import '../styles/Contact.css';
import copy from 'clipboard-copy';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import LanguageContext from '../context/LanguageContext';

function Contact() {
  const { isEnglish } = useContext(LanguageContext);

  const emailClick = () => {
    copy('joanamdsantos1@gmail.com');
    alert(isEnglish ? 'Email copied on clipboard' : 'Email copiado no clipboard');
  }

  return (
    <div className="contact-page">
      <li>
        <MdEmail style={{ color: '#F14133' }} />
          <Button variant="link" onClick={emailClick} className="email">
            joanamdsantos1@gmail.com
          </Button>
      </li>
      <li>
        <FaLinkedin style={{ color: '#0078B8' }} />
          <a href="https://www.linkedin.com/in/dev-joanamds/" target="_blank" rel="noopener noreferrer">
            <Button className="linkedin">
              Linkedin
            </Button>
          </a>
      </li>
      <li>
        <FaGithub style={{ color: 'black' }} />
        <a href="https://github.com/joanamds" target="_blank" rel="noopener noreferrer">
          <Button variant="dark">
            Github
          </Button>
        </a>
      </li>
    </div>
  );
}

export default Contact;