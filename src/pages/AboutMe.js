import React, { useContext } from 'react';
import '../styles/AboutMe.css';
import joana from '../images/joana-photo.png';
import LanguageContext from '../context/LanguageContext';
import { FaUserGraduate, FaCode } from "react-icons/fa";
// import pinkBackground from '../images/pink-background.png'

function AboutMe() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="aboutme-page" id="aboutme">
    <div className="about-container">
        <div className="info-aboutme">
          <div className="typewriter">
            <h1>Joana Maria dos Santos</h1>
          </div>
          <p className="text-aboutme"> {isEnglish
            ? `I am currently in a career transition, moving from the education field to the technology field. I decided to venture into a new area because I desire to work on something that allows me to step out of my comfort zone and challenge myself more each day, and I believe I consistently do that in the development field. I began my studies to become a full-stack developer at Trybe in July 2022. I have already completed the web development fundamentals module, the front-end module, the back-end module, the computer science module, and I am now wrapping up the Python Elective.`
            : 'Atualmente estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022. Já terminei o módulo de fundamentos do desenvolvimento web, o módulo de front-end, o módulo de back-end, o módulo de ciência da computação e agora estou finalizando a Eletiva em Python.'}</p>
      </div>
      <div className="my-picture">
        <img src={ joana } alt="foto de Joana Maria dos Santos" className="joana-picture"/>
        </div>
      </div>
      <div className="education">
        <h2>{isEnglish? 'Education' : 'Formação'}</h2>
        <ul>
          <li><FaUserGraduate /> 2017-2021: { isEnglish ? 'Pedagogy' : 'Pedagogia' } - Universidade do Estado de Santa Catarina(UDESC)</li>
          <li><FaCode />  2022-: {isEnglish? 'Web Development' : 'Desenvolvimento Web'} - Trybe</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;