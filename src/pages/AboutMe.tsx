import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import { FaUserGraduate, FaCode } from "react-icons/fa";
import '../styles/AboutMe.css';
import { LanguageContextType } from '../types/ContextTypes';
const joana = require('../images/joana-photo.svg').default;

function AboutMe(): JSX.Element {
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);

  return (
    <div className="aboutme-page" id="aboutme">
    <div className="about-container">
        <div className="info-aboutme">
          <div className="typewriter">
            <h1>Joana Maria dos Santos</h1>
          </div>
          <p className="text-aboutme"> {isEnglish
            ? `I am currently in the midst of a career transition, moving from the field of education to the technology sector. I've decided to venture into this new field because I want to work in something that allows me to break out of my comfort zone and challenge myself every day. I believe I consistently achieve this in the field of development. I began my studies to become a full stack developer at Trybe in July 2022 and completed the program in September 2023. I successfully finished the modules covering web development fundamentals, front-end, back-end, computer science, and also took an elective course in Python.`
            : 'Atualmente estou em transição de carreira, saindo da área da educação para a área da tecnologia. Decidi me aventurar em uma nova área por desejar atuar em algo que me permita sair da comodidade e me desafiar cada dia mais e acredito que faço isso constantemente na área de desenvolvimento. Comecei meus estudos para me tornar desenvolvedora full stack na Trybe em julho de 2022 e finalizei em setembro de 2023. Concluí os módulos de fundamentos do desenvolvimento web, front-end, back-end, ciência da computação e fiz uma eletiva em Python.'}</p>
      </div>
      <div className="my-picture">
        <svg viewBox="0 0 500 105">
          <path id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          className="path-curve"
          />
          <text x="0" y="0" width="700"> {/* Ajuste o tamanho da fonte aqui */}
            <textPath alignmentBaseline="middle" href="#curve" className="photo-title" startOffset="15%"> {/* Ajuste o valor de startOffset aqui */}
              { isEnglish ? 'This Barbie is a Web Developer' : 'Essa Barbie é Desenvolvedora'}
            </textPath>
          </text>
      </svg>
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