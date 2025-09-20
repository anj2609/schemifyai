import React, { createContext, useContext, useState } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  translate: (key: string) => string;
  availableLanguages: Language[];
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

// Simplified translations for demo
const translations: Record<string, Record<string, string>> = {
  en: {
    appTitle: 'Schemify - AI Assistant for Government Schemes',
    tagline: 'Discover welfare schemes you\'re eligible for',
    getStarted: 'Get Started',
    findSchemes: 'Find My Schemes',
    personalInfo: 'Personal Information',
    age: 'Age',
    occupation: 'Occupation',
    monthlyIncome: 'Monthly Income (₹)',
    gender: 'Gender',
    state: 'State',
    district: 'District',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    recommendedSchemes: 'Recommended Schemes for You',
    eligibilityMatch: 'Eligibility Match',
    applicationSteps: 'Application Steps',
    applyNow: 'Apply Now',
    backToResults: 'Back to Results',
    loading: 'Finding schemes for you...',
    noSchemes: 'No schemes found matching your criteria.',
    viewDetails: 'View Details',
  },
  hi: {
    appTitle: 'स्कीमिफाई - सरकारी योजनाओं के लिए AI सहायक',
    tagline: 'उन कल्याणकारी योजनाओं की खोज करें जिनके लिए आप पात्र हैं',
    getStarted: 'शुरू करें',
    findSchemes: 'मेरी योजनाएं खोजें',
    personalInfo: 'व्यक्तिगत जानकारी',
    age: 'उम्र',
    occupation: 'व्यवसाय',
    monthlyIncome: 'मासिक आय (₹)',
    gender: 'लिंग',
    state: 'राज्य',
    district: 'जिला',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    recommendedSchemes: 'आपके लिए अनुशंसित योजनाएं',
    eligibilityMatch: 'पात्रता मैच',
    applicationSteps: 'आवेदन के चरण',
    applyNow: 'अभी आवेदन करें',
    backToResults: 'परिणामों पर वापस जाएं',
    loading: 'आपके लिए योजनाएं खोजी जा रही हैं...',
    noSchemes: 'आपके मानदंडों से मेल खाने वाली कोई योजना नहीं मिली।',
    viewDetails: 'विवरण देखें',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
  };

  const translate = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      availableLanguages: languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}