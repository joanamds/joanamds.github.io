import { ThemeContextType } from '../types/ContextTypes';
import { createContext, Context } from 'react';

const ThemeContext: Context<ThemeContextType> = createContext({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

export default ThemeContext;