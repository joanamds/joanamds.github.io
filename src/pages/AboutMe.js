import React, { useContext } from 'react';
import '../styles/AboutMe.css';
import joana from '../images/joana-photo.jpeg';
import Header from '../components/Header';
import LanguageContext from '../context/LanguageContext';

function AboutMe() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="aboutme-page">
    <Header />
    <div className="about-container">
      <div className="info-aboutme">
      <h1 className="title-name">{isEnglish ? 'Joana Maria dos Santos, 25 years' : 'Joana Maria dos Santos, 25 anos'}</h1>
          <h3 className="subtitle-who">{isEnglish ? 'Who I am?' : 'Quem sou eu?'}</h3>
          <p className="text-aboutme"> {isEnglish
            ? `I am changing my career. I am moving from education to technology. I decided to changed my career because I wanted to work on something that could challenge me every day and I believe I'm doing it constantly on the development area. I started my studies to become a full stack developer on Trybe in july 2022. I've already finished the first module where I studied the fundamentals of web development, the second module I studied front-end and this year I will start the third module on which I will learn back-end. I love music and I'm constantly hearing mainly pop songs. On my free time I like to watch series, movies and read books, mostly of science fiction, adventure and fantasy.`
            : 'Atualmente estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022. Já terminei o módulo de fundamentos do desenvolvimento web, recentemente finalizei o módulo de front-end e neste ano iniciarei o módulo de back-end. Adoro música e estou constantemente escutando principalmente música pop. No meu tempo livre gosto muito de assistir séries, filmes e ler livros, principalmente de ficção científica, aventura e fantasia.'}</p>
      </div>
      <div className="my-picture">
        <img src={ joana } alt="imagem da Joana" className="joana-picture"/>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;