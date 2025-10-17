<template>
  <div class="flex items-center gap-2">
    <button
      @click="setLocale('pt-BR')"
      :class="[
        'px-3 py-1.5 rounded-lg font-medium transition-all duration-300',
        locale === 'pt-BR'
          ? 'bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg shadow-primary/30'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      ]"
      aria-label="Português"
    >
      🇧🇷 PT
    </button>
    <button
      @click="setLocale('en-US')"
      :class="[
        'px-3 py-1.5 rounded-lg font-medium transition-all duration-300',
        locale === 'en-US'
          ? 'bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg shadow-primary/30'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      ]"
      aria-label="English"
    >
      🇺🇸 EN
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const setLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>
