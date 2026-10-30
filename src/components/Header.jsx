import { useState } from 'react'
import { siteConfig } from '../config/site'
import { useLang } from '../i18n/LanguageContext'
import { LANGS, LANG_LABELS } from '../i18n/translations'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#statement', label: t('nav.statement') },
    { href: '#featured', label: t('nav.concepts') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="site-header">
      <a href="#top" className="site-header__brand">{siteConfig.artistName}</a>

      <nav className="site-header__nav" aria-label="Primary">
        {navItems.map((n) => (
          <a key={n.href} href={n.href}>{n.label}</a>
        ))}
      </nav>

      <div className="site-header__tools">
        <div className="lang-switcher" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l}
              className={lang === l ? 'is-active' : ''}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
