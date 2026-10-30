import { createContext, useContext, useState, useEffect } from 'react'
import { translations, LANGS } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('ln-lang')
    return LANGS.includes(saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('ln-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => {
    const parts = path.split('.')
    let cur = translations[lang]
    for (const p of parts) {
      if (cur && cur[p] !== undefined) cur = cur[p]
      else return path
    }
    return cur
  }

  const setLang = (l) => LANGS.includes(l) && setLangState(l)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
