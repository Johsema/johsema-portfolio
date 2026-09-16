// app/context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import { LanguageModal } from '../components/common/LanguageModal';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Inicializa en null para obligar a mostrar el modal en cada visita/recarga
  const [language, setLanguage] = useState<Language | null>(null);

  const handleSelect = (lang: Language) => {
    setLanguage(lang); // Solo actualiza el estado en memoria, sin guardar en localStorage
  };

  return (
    <LanguageContext.Provider value={{ language: language || 'es', setLanguage: handleSelect }}>
      {/* Si language es null, despliega el modal */}
      {!language && <LanguageModal onSelectLanguage={handleSelect} />}
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  return context;
};