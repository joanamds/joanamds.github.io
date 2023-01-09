import { useState, useMemo } from 'react';
import LanguageContext from './LanguageContext';

function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(false);

  const language = useMemo(() => ({
    isEnglish,
    setIsEnglish,
  }), [isEnglish]);

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;