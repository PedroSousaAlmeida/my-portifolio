import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US'
import ptBR from './locales/pt-BR'

// Get saved language from localStorage or use browser language
// Check if running in browser environment (not during build)
const isBrowser = typeof window !== 'undefined'
const savedLocale = isBrowser ? localStorage.getItem('locale') : null
const browserLocale = isBrowser ? navigator.language.toLowerCase() : ''

let defaultLocale = 'en-US'

if (savedLocale) {
  defaultLocale = savedLocale
} else if (browserLocale.startsWith('pt')) {
  defaultLocale = 'pt-BR'
}

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR
  }
})

export default i18n
