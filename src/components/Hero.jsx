import { siteConfig } from '../config/site'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src="/Concepts/Gemini_Generated_Image_iaetl7iaetl7iaet.jpg"
          alt="Editorial beauty portrait — L. Nocturne"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero__scrim" />
      </div>
      <div className="hero__content">
        <Reveal>
          <p className="hero__eyebrow">{siteConfig.artistTitle}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero__title">{t('hero.title')}</h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero__intro">{siteConfig.intro}</p>
        </Reveal>
        <Reveal delay={360}>
          <a href="#portfolio" className="hero__cta">
            {t('hero.cta')}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
      <div className="hero__scroll" aria-hidden="true">Scroll</div>
    </section>
  )
}
