<template>
  <section class="text-white mt-20 py-16 relative overflow-hidden" id="about">
    <!-- Background Glow -->
    <div class="absolute z-0 top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 via-pink-500/10 to-purple-500/10 blur-3xl"></div>
    <div class="absolute z-0 bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/10 via-primary/10 to-purple-500/10 blur-3xl"></div>

    <div class="max-w-screen-xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Education Section -->
        <div data-aos="fade-right">
          <div class="mb-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {{ t('about.title') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                {{ t('about.titleHighlight') }}
              </span>
            </h2>
            <p class="text-gray-400 text-lg">
              {{ t('about.subtitle') }}
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(element, index) in education"
              :key="element.id"
              data-aos="fade-up"
              :data-aos-delay="index * 50"
              class="group relative">

              <!-- Education Card -->
              <div class="relative p-5 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm
                          border border-[#1f1641] overflow-hidden
                          transform transition-all duration-500
                          hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">

                <!-- Glow Effect on Hover -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                </div>

                <div class="flex items-start gap-4 relative">
                  <!-- Icon -->
                  <div class="flex-shrink-0">
                    <div class="w-14 h-14 flex items-center justify-center rounded-xl
                                bg-gradient-to-br from-primary/20 to-pink-500/20
                                border border-primary/30
                                transform group-hover:scale-110 group-hover:rotate-6
                                transition-all duration-500">
                      <img
                        src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                        alt="graduation cap"
                        class="w-8 h-8"
                      />
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-bold text-transparent bg-clip-text
                               bg-gradient-to-r from-primary to-pink-500 mb-2
                               group-hover:scale-105 transition-transform duration-300 origin-left">
                      {{ element.School }}
                    </h3>
                    <p class="text-gray-300 text-sm mb-1">
                      {{ element.program }}
                    </p>
                    <p class="text-gray-500 text-xs">
                      📅 {{ element.year }}
                    </p>
                  </div>

                  <!-- Arrow Icon -->
                  <div class="opacity-0 group-hover:opacity-100 transform translate-x-2
                              group-hover:translate-x-0 transition-all duration-500">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Me Section -->
        <div data-aos="fade-left">
          <div class="mb-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {{ t('about.moreAbout') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                {{ t('about.moreAboutHighlight') }}
              </span> {{ t('about.moreAboutMe') }}
            </h2>
          </div>

          <!-- Bio -->
          <div class="mb-8 p-6 rounded-2xl bg-[#111a3e]/30 backdrop-blur-sm border border-[#1f1641]">
            <p class="text-gray-300 leading-relaxed">
              {{ t('about.bio1') }}
            </p>
            <p class="text-gray-300 leading-relaxed mt-4">
              {{ t('about.bio2') }}
            </p>
            <p class="text-gray-300 leading-relaxed mt-4">
              {{ t('about.bio3') }}
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-4">
            <!-- Experience -->
            <div class="group relative" data-aos="zoom-in" data-aos-delay="100">
              <div class="relative text-center p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm
                          border border-[#1f1641] overflow-hidden
                          transform transition-all duration-500
                          hover:scale-110 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">

                <!-- Glow -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                </div>

                <div class="relative">
                  <h3 class="text-3xl font-bold text-transparent bg-clip-text
                             bg-gradient-to-r from-primary to-pink-500 mb-2">
                    +4
                  </h3>
                  <p class="text-xs text-gray-400 uppercase tracking-wide">
                    {{ t('about.yearsExperience') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Projects -->
            <div class="group relative" data-aos="zoom-in" data-aos-delay="200">
              <div class="relative text-center p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm
                          border border-[#1f1641] overflow-hidden
                          transform transition-all duration-500
                          hover:scale-110 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20">

                <!-- Glow -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>
                </div>

                <div class="relative">
                  <h3 class="text-3xl font-bold text-transparent bg-clip-text
                             bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
                    +10
                  </h3>
                  <p class="text-xs text-gray-400 uppercase tracking-wide">
                    {{ t('about.projectsDone') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Commitment -->
            <div class="group relative" data-aos="zoom-in" data-aos-delay="300">
              <div class="relative text-center p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm
                          border border-[#1f1641] overflow-hidden
                          transform transition-all duration-500
                          hover:scale-110 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">

                <!-- Glow -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                </div>

                <div class="relative">
                  <h3 class="text-3xl font-bold text-transparent bg-clip-text
                             bg-gradient-to-r from-purple-500 to-primary mb-2">
                    100%
                  </h3>
                  <p class="text-xs text-gray-400 uppercase tracking-wide">
                    {{ t('about.commitment') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const education = computed(() => [
  {
    id: 1,
    School: t('about.education.fiel'),
    program: t('about.education.fielProgram'),
    year: t('about.education.fielYear'),
  },
  {
    id: 2,
    School: t('about.education.aluraNest'),
    program: t('about.education.aluraNestProgram'),
    year: t('about.education.aluraNestYear'),
  },
  {
    id: 3,
    School: t('about.education.udemyNet'),
    program: t('about.education.udemyNetProgram'),
    year: t('about.education.udemyNetYear'),
  },
  {
    id: 4,
    School: t('about.education.udemyNext'),
    program: t('about.education.udemyNextProgram'),
    year: t('about.education.udemyNextYear'),
  },
  {
    id: 6,
    School: t('about.education.aluraVue'),
    program: t('about.education.aluraVueProgram'),
    year: t('about.education.aluraVueYear'),
  },
  {
    id: 7,
    School: t('about.education.aluraReact'),
    program: t('about.education.aluraReactProgram'),
    year: t('about.education.aluraReactYear'),
  },
  {
    id: 5,
    School: t('about.education.cursoDev'),
    program: t('about.education.cursoDevProgram'),
    year: t('about.education.cursoDevYear'),
  },
])
</script>
