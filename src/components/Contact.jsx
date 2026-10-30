import { useState } from 'react'
import { siteConfig } from '../config/site'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6 6 6 0 0 1 1 .1v3.1a3 3 0 1 0 2 2.8V3h3z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3h1.4V5.8c-.2 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2h-2.3V14h2.3v7h2.8z" />
    </svg>
  ),
  Pinterest: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 .1-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.4-2 3.4-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.1.3-.3.2-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7A10 10 0 1 0 12 2z" />
    </svg>
  ),
}

export default function Contact() {
  const { t } = useLang()
  const { email, socials, location } = siteConfig
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="section__eyebrow">{t('contact.eyebrow')}</p>
        <h2 className="contact__title">{t('contact.title')}</h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="contact__socials" aria-label="Social channels">
          {socials.map((s) => (
            <span key={s.label} className="contact__social" title={`${s.label} — coming soon`}>
              <span className="contact__social-icon">{icons[s.label]}</span>
              <span className="contact__social-label">{s.label}</span>
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={250}>
        <button className="contact__cta" onClick={handleCopy} type="button">
          <span className="contact__cta-text">{copied ? t('contact.copied') : t('contact.cta')}</span>
          <span className="contact__cta-arrow" aria-hidden="true">{copied ? '✓' : '→'}</span>
        </button>
      </Reveal>

      <Reveal delay={350}>
        <p className="contact__note">{t('contact.note')}</p>
      </Reveal>
    </section>
  )
}
