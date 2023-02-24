import React from 'react';
import {
  SiBootstrap, SiCss3, SiEslint, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiJest, SiMaterialui, SiMysql, SiNodedotjs, SiReact, SiRedux,
  SiTailwindcss,
  SiTestinglibrary, SiTrello
} from "react-icons/si";
import '../styles/ToolsList.css';

function Tools() {
  return (
    <div className="my-tools">
      <hr />
      <ul>
        <li><SiCss3 /></li>
        <li><SiJavascript /></li>
        <li><SiHtml5 /></li>
        <li><SiBootstrap/></li>
        <li><SiGit /></li>
        <li><SiGithub /></li>
        <li><SiJest /></li>
        <li><SiReact /></li>
        <li><SiTestinglibrary /></li>
        <li><SiTrello /></li>
        <li><SiEslint /></li>
        <li><SiRedux /></li>
        <li><SiMysql /></li>
        <li><SiNodedotjs /></li>
        <li><SiTailwindcss /></li>
        <li><SiMaterialui /></li>
      </ul>
    </div>
  );
}

export default Tools;