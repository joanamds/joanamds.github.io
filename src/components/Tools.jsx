import React from 'react';
import { useContext } from 'react';
import {
  SiBootstrap, SiCss3, SiEslint, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiJest, SiMysql, SiNodedotjs, SiReact, SiRedux,
  SiTailwindcss, SiMongodb,
  SiTestinglibrary, SiTrello, SiTypescript, SiDocker, SiSequelize, SiJsonwebtokens, SiPython, SiMui
} from "react-icons/si";
import LanguageContext from '../context/LanguageContext';
import '../styles/ToolsList.css';
import { Table } from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';

function Tools() {
  const { isEnglish } = useContext(LanguageContext);
  const { isDarkTheme } = useContext(ThemeContext)

  const tools = [
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Testing Library', icon: <SiTestinglibrary /> },
    { name: 'Trello', icon: <SiTrello /> },
    { name: 'ESLint', icon: <SiEslint /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Sequelize', icon: <SiSequelize /> },
    { name: 'JSON Web Tokens', icon: <SiJsonwebtokens /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <SiPython /> },
  ];

  const toolsGroups = [];
  for (let i = 0; i < tools.length; i += 8) {
    toolsGroups.push(tools.slice(i, i + 8));
  }

  return (
    <div className="my-tools" id="tools">
      <div className="typewriter">
        <h1>{isEnglish ? 'Tools and technologies' : 'Tecnologias e ferramentas'}</h1>
      </div>
      <Table striped bordered hover variant={isDarkTheme ? "dark" : "light"}>
        <tbody>
          {toolsGroups.map((group, index) => (
            <tr key={index}>
              {group.map((tool, toolIndex) => (
                <td key={toolIndex} className="tool-cell">
                  <div className="icon">{tool.icon}</div>
                  <div className="name">{tool.name}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tools;
