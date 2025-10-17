<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = computed(() => [
    {
        id: 1,
        icon: 'https://img.icons8.com/?size=100&id=12486&format=png&color=FFFFFF',
        name: t('services.webFrontend'),
        description: t('services.webFrontendDesc')
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/?size=100&id=2778&format=png&color=FFFFFF',
        name: t('services.backend'),
        description: t('services.backendDesc')
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/?size=100&id=al1VlNCK9eK5&format=png&color=FFFFFF',
        name: t('services.aws'),
        description: t('services.awsDesc')
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/?size=100&id=BtKtpw0I04Ie&format=png&color=FFFFFF',
        name: t('services.dataAnalysis'),
        description: t('services.dataAnalysisDesc')
    },
    {
        id: 5,
        icon: "https://img.icons8.com/?size=100&id=8305&format=png&color=FFFFFF",
        name: t('services.database'),
        description: t('services.databaseDesc')
    },
    {
        id: 6,
        icon: "https://img.icons8.com/?size=100&id=41303&format=png&color=FFFFFF",
        name: t('services.cleanArch'),
        description: t('services.cleanArchDesc')
    }
])


</script>

<template>
  <section class="text-white mt-20 py-16" id="services">
    <div class="px-4 xl:px-16 max-w-screen-xl mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('services.title') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            {{ t('services.titleHighlight') }}
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="service-card group relative">

          <!-- Card Content -->
          <div class="relative h-full p-8 bg-[#111a3e]/50 backdrop-blur-sm rounded-2xl
                      border border-[#1f1641] overflow-hidden
                      transform transition-all duration-500
                      hover:scale-105 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">

            <!-- Background Glow on Hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div class="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
            </div>

            <!-- Icon -->
            <div class="relative mb-6 flex justify-center">
              <div class="w-24 h-24 flex items-center justify-center rounded-2xl
                          bg-gradient-to-br from-primary/20 to-pink-500/20
                          border border-primary/30
                          transform group-hover:scale-110 group-hover:rotate-6
                          transition-all duration-500">
                <img :src="service.icon"
                     alt="service icon"
                     class="w-16 h-16 filter group-hover:brightness-110 transition-all duration-500">
              </div>
            </div>

            <!-- Number Badge -->
            <div class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                        bg-gradient-to-br from-primary to-pink-500 rounded-full
                        text-white font-bold text-sm
                        transform group-hover:scale-110 group-hover:rotate-12
                        transition-all duration-500">
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- Content -->
            <div class="relative text-center">
              <h3 class="text-lg font-bold uppercase text-transparent bg-clip-text
                         bg-gradient-to-r from-primary to-pink-500 mb-4
                         group-hover:scale-105 transition-transform duration-300">
                {{ service.name }}
              </h3>

              <p class="text-gray-400 text-sm leading-relaxed
                        group-hover:text-gray-300 transition-colors duration-300">
                {{ service.description }}
              </p>
            </div>

            <!-- Hover Arrow -->
            <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100
                        transform translate-x-2 group-hover:translate-x-0
                        transition-all duration-500">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>

            <!-- 3D Effect Lines -->
            <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
              <div class="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-primary to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-pink-500 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
