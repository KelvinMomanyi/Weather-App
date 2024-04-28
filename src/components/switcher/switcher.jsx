import React,{useContext, useState} from 'react'
import './switcher.scss'
import { TranslationContext } from '../../context/Translation'

// This component provides a language switcher dropdown to change the locale.
const Switcher = () => {
  // Accesses the locale and handleLocaleChange function from the TranslationContext using the useContext hook.
  const {locale, handleLocaleChange} = useContext(TranslationContext);
  
  // Returns the JSX elements representing the language switcher.
  return (
    <div className='switcher-container'>
      {/* Language switcher dropdown */}
      <select value={locale} onChange={(e) => handleLocaleChange(e.target.value)}>
        <option value="en">English</option>
        <option value="sw">Swahili</option> 
      </select>
    </div>
  )
}

export default Switcher;
