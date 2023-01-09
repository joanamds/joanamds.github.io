import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './context/ThemeProvider';
import LanguageProvider from './context/LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </HashRouter>
);
