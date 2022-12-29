import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import developer from '../images/girl-dev.png';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <h1>Hello World!</h1>
        <h2>Meu nome é Joana e sou estudante de desenvolvimento web!</h2>
        <div className="image-container">
          <img src={developer} alt="female developer" width="500" className="image-developer" />
        </div>
        <div className="buttons-container">
          <button
            className="button-home"
            onClick={ ()=> history.push('/aboutme')}
          >
            Sobre mim
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/projects')}
          >
            Projetos
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/tools')}
          >
            Tecnologias e ferramentas
          </button>
          <button
            className="button-home"
            onClick={() => history.push('/contact')}
          >
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;