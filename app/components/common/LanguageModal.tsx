// components/LanguageModal.tsx
import React from 'react';
import styles from './LanguageModal.module.css';

interface LanguageModalProps {
  onSelectLanguage: (lang: 'es' | 'en') => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({ onSelectLanguage }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Choose your language</h2>
        <p>Selecciona tu idioma para continuar</p>
        
        <div className={styles.buttonGroup}>
          <button onClick={() => onSelectLanguage('en')} className={styles.langBtn}>
            English 🇺🇸
          </button>
          <button onClick={() => onSelectLanguage('es')} className={styles.langBtn}>
            Español 🇪🇸
          </button>
        </div>
      </div>
    </div>
  );
};