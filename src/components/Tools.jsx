import React from 'react';
import { useContext } from 'react';
import {
  SiBootstrap, SiCss3, SiEslint, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiJest, SiMaterialui, SiMysql, SiNodedotjs, SiReact, SiRedux,
  SiTailwindcss, SiMongodb,
  SiTestinglibrary, SiTrello, SiTypescript, SiDocker, SiSequelize, SiJsonwebtokens
} from "react-icons/si";
import LanguageContext from '../context/LanguageContext';
import '../styles/ToolsList.css';

function Tools() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="my-tools">
      <hr />
      <h2>{isEnglish ? 'Tools and technologies' : 'Tecnologias e ferramentas' }</h2>
      <ul>
        <li><SiCss3 /></li>
        <li><SiJavascript /></li>
        <li><SiHtml5 /></li>
        <li><SiGit /></li>
        <li><SiGithub /></li>
        <li><SiJest /></li>
        <li><SiReact /></li>
        <li><SiTestinglibrary /></li>
        <li><SiTrello /></li>
        <li><SiEslint /></li>
        <li><SiRedux /></li>
        <li><SiBootstrap/></li>
        <li><SiTailwindcss /></li>
        <li><SiMaterialui /></li>
        <li><SiMysql /></li>
        <li><SiNodedotjs /></li>
        <li><SiTypescript /></li>
        <li><SiDocker /></li>
        <li><SiSequelize /></li>
        <li><SiJsonwebtokens /></li>
        <li><SiMongodb /></li>
      </ul>
    </div>
  );
}

export default Tools;