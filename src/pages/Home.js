import React, { useContext } from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import developer from '../images/girl-dev.png';
import { useHistory } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

function Home() {
  const history = useHistory();
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <h1>Hello World!</h1>
        <h2>{isEnglish
          ? 'My name is Joana and I am a web development student'
          : 'Meu nome é Joana e sou estudante de desenvolvimento web!'}</h2>
        <div className="image-container">
          <img src={developer} alt="female developer" width="500" className="image-developer" />
        </div>
        <div className="buttons-container">
          <button
            className="button-home"
            onClick={ ()=> history.push('/aboutme')}
          >
            { isEnglish ? 'About me' : 'Sobre mim'}
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/projects')}
          >
            {isEnglish ? 'Projects' : 'Projetos'}
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/tools')}
          >
            {isEnglish ? 'Tools and technologies' : 'Tecnologias e ferramentas'}
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/contact')}
          >
            {isEnglish ? 'Contact' : 'Contato'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;