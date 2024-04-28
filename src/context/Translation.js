import React, { createContext, useState } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages_en from '../translations/en.json';
import messages_sw from '../translations/sw.json';

// Define the context
export const TranslationContext = createContext();

// Provider component
export const TranslationContextProvider = ({ children }) => {
    // State for locale
    const [locale, setLocale] = useState('en');
  
    // Function to handle locale change
    const handleLocaleChange = (newLocale) => {
      setLocale(newLocale);
    };

    // Messages object
    const messages = {
      en: messages_en,
      sw: messages_sw
    };

    // Return statement for TranslationContextProvider component
return (
  // Provides locale and handleLocaleChange function through the TranslationContext
  <TranslationContext.Provider value={{ locale, handleLocaleChange }}>
    {/* Internationalization provider for formatting languages */}
     <IntlProvider locale={locale} messages={messages[locale]}>
              {children} 
      </IntlProvider>
  </TranslationContext.Provider>
);

};
