import { LanguageContextType } from '../types/ContextTypes';
import { createContext, Context } from 'react';

const LanguageContext: Context<LanguageContextType> = createContext({
  isEnglish: false,
  setIsEnglish: () => {},
});

export default LanguageContext;