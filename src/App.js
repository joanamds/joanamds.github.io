import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import LandingPage from './pages/LandingPage';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <LandingPage />
    </div>
  );
}

export default App;
