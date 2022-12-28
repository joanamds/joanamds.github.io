import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Routes from './Routes';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Routes />
    </div>
  );
}

export default App;
