import React, { useContext } from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import developer from '../images/girl-dev.png';
import { useHistory } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import '../styles/Title.scss'

function Home() {
  const history = useHistory();
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <div className="typewriter">
          <h1>{isEnglish ? 'Hello World! My name is Joana' : 'Hello World! Meu nome é Joana'}</h1>
        </div>
        <h2>{isEnglish
          ? 'I am a full stack developer'
          : 'Sou desenvolvedora full stack'}</h2>
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
          {/* <button
            className="button-home"
            onClick={() => history.push('/tools')}
          >
            <span>{isEnglish ? 'Tools and technologies' : 'Tecnologias e ferramentas'}</span>
          </button> */}
          <button
            className="button-home"
            onClick={() => history.push('/contact')}
          >
            <span>{isEnglish ? 'Contact' : 'Contato'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;