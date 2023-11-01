import React, { useState, useMemo, PropsWithChildren } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({children}: PropsWithChildren): JSX.Element {
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