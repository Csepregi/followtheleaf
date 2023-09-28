import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";



// Define a type for the language context value
type LanguageContextType = {
  selectedLanguage: string;
  changeLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export let handle = {
  i18n: "common",
};


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  let { i18n, t } = useTranslation(["common"]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);

    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
