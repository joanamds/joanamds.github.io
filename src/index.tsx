import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './context/ThemeProvider';
import LanguageProvider from './context/LanguageProvider';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
