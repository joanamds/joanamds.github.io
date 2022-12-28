import React from 'react';
import './styles/AboutMe.css';
import joana from '../images/joana-photo.jpeg';
import Header from '../components/Header';

function AboutMe() {
  return (
    <div className="aboutme-page">
    <Header />
    <div className="about-container">
      <div className="info-aboutme">
      <h1 className="title-name">Joana Maria dos Santos, 25 anos</h1>
      <h3 className="subtitle-who">Quem é a Joana?</h3>
      <p className="text-aboutme">Estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. 
      Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022. Já terminei o módulo de fundamentos do desenvolvimento web, recentemente finalizei o módulo de front-end e no próximo ano iniciarei o módulo de back-end. 
      Adoro música e estou constantemente escutando principalmente música pop.
      No meu tempo livre gosto muito de assistir séries, filmes e ler livros, principalmente de ficção científica, aventura e fantasia.</p>
      </div>
      <div className="my-picture">
        <img src={ joana } alt="imagem da Joana" className="joana-picture"/>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;