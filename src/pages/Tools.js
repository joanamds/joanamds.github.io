import React, { useContext } from 'react';
import Header from '../components/Header';
import toolsLearn from '../data/toolsLearn';
import toolsWillLearn from '../data/toolsWillLearn';
import Table from 'react-bootstrap/Table';
import '../styles/Tools.css';
import ThemeContext from '../context/ThemeContext';

function Tools() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="tools-page">
      <Header />
      <h1>Tecnologias e ferramentas</h1>
      <div className="table-container">
        <div className="learn">
          <Table striped bordered hover variant={ isDarkTheme? 'dark' : 'light'}>
            <tbody>
              <tr>
                {toolsLearn.slice(0, 4).map((tool) => (
                  <td>
                    <div className="tool">
                      {tool.title}
                      <img src={tool.icon} alt="HTML icon" width="50" />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                {toolsLearn.slice(4, 8).map((tool) => (
                  <td>
                    <div className="tool">
                      {tool.title}
                      <img src={tool.icon} alt="HTML icon" width="50" />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                {toolsLearn.slice(8, 12).map((tool) => (
                  <td>
                    <div className="tool">
                      {tool.title}
                      <img src={tool.icon} alt="HTML icon" width="50" />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
        </Table>
        </div>
        <div className="will-learn">
          <Table striped bordered hover variant={isDarkTheme ? 'dark' : 'light'}>
            <tbody>
              <tr>
                {toolsWillLearn.slice(0, 3).map((tool) => (
                  <td>
                    <div className="tool">
                      {tool.title}
                      <img src={tool.icon} alt="HTML icon" width="40" />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                {toolsWillLearn.slice(3, 6).map((tool) => (
                  <td>
                    <div className="tool">
                      {tool.title}
                      <img src={tool.icon} alt="HTML icon" width="40" />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Tools;