import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import developer from '../images/girl-dev.png';
import { useHistory } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import '../styles/Title.scss'
import Contact from '../components/ContactModal';
import { Button, Modal } from 'react-bootstrap';

function Home() {
  const [isShow, invokeModal] = useState(false)

  const initModal = () => {
    if (isShow) {
      return invokeModal(false)
    }
    return invokeModal(true);
  }

  const history = useHistory();
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <div className="typewriter">
          <h1>{isEnglish ? 'Hello World! My name is Joana' : 'Hello World! Meu nome é Joana'}</h1>
        </div>
        <div className="image-container">
          <img src={developer} alt="female developer" width="500" className="image-developer" />
        </div>
        <div className="buttons-container">
          <button
            className="button-home"
            onClick={ ()=> history.push('/aboutme')}
          >
            <span>{ isEnglish ? 'About me' : 'Sobre mim'}</span>
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/projects')}
          >
            <span>{isEnglish ? 'Projects' : 'Projetos'}</span>
          </button>
          <button
            type="button"
            className="button-home"
            onClick={initModal}
          >
            <span>{isEnglish ? 'Contact' : 'Contato'}</span>
          </button>
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
        </div>
      </div>
    </div>
  );
}

export default Home;