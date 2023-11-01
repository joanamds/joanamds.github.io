import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import { ThemeContextType } from './types/ContextTypes';

function App(): JSX.Element {
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? 'App__Dark' : 'App__Light'}>
      <LandingPage />
    </div>
  );
}

export default App;

