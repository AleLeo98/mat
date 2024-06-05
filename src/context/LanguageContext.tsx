import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LanguageContextType {
  selectedLanguage: 'EN' | 'IT';
  setSelectedLanguage: (lang: 'EN' | 'IT') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  selectedLanguage: 'EN',
  setSelectedLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'IT'>('EN');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
