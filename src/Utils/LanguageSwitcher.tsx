import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <button onClick={toggleLanguage} className='border-2 bg-blue-pale border-white rounded-md p-2'>
            {i18n.language === 'en' ? 'Français' : 'English'}
        </button>
    );
};

export default LanguageSwitcher;
