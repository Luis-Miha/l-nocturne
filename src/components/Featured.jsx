import { featuredConcepts } from '../data/portfolio'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Featured() {
  const { t } = useLang()
  return (
    <section className="featured" id="featured">
      <Reveal>
        <p className="section__eyebrow">{t('featured.eyebrow')}</p>
        <h2 className="section__title">
          {t('featured.title')}
        </h2>
      </Reveal>

      {featuredConcepts.map((c) => (
        <article className="featured__item" key={c.id}>
          <Reveal className="featured__media">
            {c.images.map((img, i) => (
              <img key={i} src={img} alt={`${t('featured.conceptTitle')} ${i + 1}`} loading="lazy" />
            ))}
          </Reveal>
          <Reveal delay={120} className="featured__text">
            <span className="cat">{t('featured.conceptCategory')}</span>
            <h3>{t('featured.conceptTitle')}</h3>
            <p>{t('featured.conceptNarrative')}</p>
          </Reveal>
        </article>
      ))}
    </section>
  )
}
