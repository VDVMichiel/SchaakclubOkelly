import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem', // Space between buttons
    fontSize: '0.875rem' // Smaller text size
  };

  const buttonStyle: React.CSSProperties = {
    fontWeight: 'normal', // Default font weight
    cursor: 'pointer'
  };

  const selectedButtonStyle: React.CSSProperties = {
    fontWeight: 'bold', // Bold font weight for selected language
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <button
        style={i18n.language === 'en' ? selectedButtonStyle : buttonStyle}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        style={i18n.language === 'fr' ? selectedButtonStyle : buttonStyle}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
      <button
        style={i18n.language === 'nl' ? selectedButtonStyle : buttonStyle}
        onClick={() => changeLanguage('nl')}
      >
        NL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
