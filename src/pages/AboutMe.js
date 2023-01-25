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
            ? `I am currently in a career transition, moving from the education field to technology.  I decided to pursue a new area because I want to work on something that could challenge me every day and I believe I'm doing it on the development area. I started my studies to become a full stack developer at Trybe in july 2022. I have already finished the module on web development fundamentals, recently completed the front-end module, and this year I started the back-end module.`
            : 'Atualmente estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022. Já terminei o módulo de fundamentos do desenvolvimento web, recentemente finalizei o módulo de front-end e neste ano comecei o módulo de back-end.'}</p>
      </div>
      <div className="my-picture">
        <img src={ joana } alt="imagem da Joana" className="joana-picture"/>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;