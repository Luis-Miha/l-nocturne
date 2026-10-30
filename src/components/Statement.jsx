import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Statement() {
  const { t } = useLang()
  return (
    <section className="statement" id="statement">
      <Reveal>
        <p className="statement__quote">{t('statement.quote')}</p>
      </Reveal>
      <Reveal delay={150}>
        <p className="statement__sig">{t('statement.sig')}</p>
      </Reveal>
    </section>
  )
}
