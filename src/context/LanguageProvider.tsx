import React, { useState, useMemo, PropsWithChildren } from 'react';
const LanguageContext = require('./LanguageContext').default

function LanguageProvider({ children }: PropsWithChildren): JSX.Element {
  const [isEnglish, setIsEnglish] = useState(false);

  const language = useMemo(() => ({
    isEnglish,
    setIsEnglish,
  }), [isEnglish]);

  return (
    <LanguageContext.Provider value={ language }>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;


