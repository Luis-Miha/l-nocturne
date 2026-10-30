import { siteConfig } from '../config/site'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {siteConfig.artistName}</span>
      <span>{t('footer.tagline')}</span>
      <span>{t('footer.credits')}</span>
    </footer>
  )
}
