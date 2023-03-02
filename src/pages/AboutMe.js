import React, { useContext } from 'react';
import '../styles/AboutMe.css';
import joana from '../images/joana-photo.jpeg';
import Header from '../components/Header';
import LanguageContext from '../context/LanguageContext';
import Tools from '../components/Tools';
import { FaUserGraduate, FaCode } from "react-icons/fa";

function AboutMe() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="aboutme-page">
    <Header />
    <div className="about-container">
        <div className="info-aboutme">
          <div className="typewriter">
            <h1>Joana Maria dos Santos</h1>
          </div>
          <p className="text-aboutme"> {isEnglish
            ? `I am currently in a career transition, moving from the education field to technology.  I decided to pursue a new area because I want to work on something that could challenge me every day and I believe I'm doing it on the development area. I started my studies to become a full stack developer at Trybe in july 2022. I have already finished the module on web development fundamentals, recently completed the front-end module, and this year I started the back-end module.`
            : 'Atualmente estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022. Já terminei o módulo de fundamentos do desenvolvimento web, recentemente finalizei o módulo de front-end e neste ano comecei o módulo de back-end.'}</p>
      </div>
      <div className="my-picture">
        <img src={ joana } alt="imagem da Joana" className="joana-picture"/>
        </div>
      </div>
      <div className="education">
        <h2>{isEnglish? 'Education' : 'Formação'}</h2>
        <ul>
          <li><FaUserGraduate /> 2017-2021: Pedagogia - Universidade do Estado de Santa Catarina</li>
          <li><FaCode />  2022-: Desenvolvimento Web - Trybe</li>
        </ul>
      </div>
      <Tools />
    </div>
  );
}

export default AboutMe;