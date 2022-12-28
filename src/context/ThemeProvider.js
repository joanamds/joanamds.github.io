import { useState, useMemo } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = useMemo(() => ({
    isDarkTheme,
      setIsDarkTheme,
  }), [isDarkTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      { children }
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;