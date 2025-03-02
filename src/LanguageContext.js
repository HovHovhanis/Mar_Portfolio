"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст для языка
const LanguageContext = createContext();


export const useLanguage = () => {
  return useContext(LanguageContext);
};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ENG');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // сохраняем язык в localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};