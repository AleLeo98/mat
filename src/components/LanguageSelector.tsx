import React from 'react';

type Language = 'EN' | 'IT';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onSelectLanguage }) => {
  return (
    <div className="flex gap-2">
      {['EN', 'IT'].map((language) => (
        <div
          key={language}
          onClick={() => onSelectLanguage(language as Language)}
          className={`cursor-pointer ${selectedLanguage === language ? 'bg-gray-300' : ''}`}
          style={{ padding: '0.5em', borderRadius: '4px' }}
        >
          {language}
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
