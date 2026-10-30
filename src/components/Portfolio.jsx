import { useState, useMemo } from 'react'
import { categories, portfolioItems } from '../data/portfolio'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const spanClass = { tall: 'span-tall', wide: 'span-wide', square: 'span-square' }

export default function Portfolio() {
  const { t } = useLang()
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const items = useMemo(
    () => (filter === 'all' ? portfolioItems : portfolioItems.filter((i) => i.category === filter)),
    [filter]
  )

  const catLabel = (id) => {
    if (id === 'all') return t('portfolio.all')
    const translated = t(`portfolio.categories.${id}`)
    return translated && translated !== `portfolio.categories.${id}`
      ? translated
      : categories.find((c) => c.id === id)?.label
  }

  return (
    <section className="section portfolio" id="portfolio">
      <Reveal>
        <div className="portfolio__header">
          <div>
            <p className="section__eyebrow">{t('portfolio.eyebrow')}</p>
            <h2 className="section__title">
              {t('portfolio.title')}
            </h2>
          </div>
          <div className="portfolio__filters" role="tablist" aria-label="Filter portfolio">
            <button
              className={filter === 'all' ? 'is-active' : ''}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
            >
              {t('portfolio.all')}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={filter === c.id ? 'is-active' : ''}
                onClick={() => setFilter(c.id)}
                aria-pressed={filter === c.id}
              >
                {catLabel(c.id)}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="editorial-grid">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 6) * 60}>
            <article
              className={`editorial-grid__item ${spanClass[item.span] || 'span-square'}`}
              onClick={() => setActive(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(item)}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="editorial-grid__meta">
                <span>{catLabel(item.category)}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Close">
            Close ✕
          </button>
          <img src={active.image} alt={active.title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
