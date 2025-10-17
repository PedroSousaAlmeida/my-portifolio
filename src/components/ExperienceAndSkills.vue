<template>
  <section class="text-white mt-20 py-16 relative overflow-hidden" id="skills">
    <!-- Background Glow -->
    <div class="absolute z-0 top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 via-pink-500/10 to-transparent blur-3xl"></div>

    <div class="max-w-screen-xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Skills Section -->
        <div data-aos="fade-right">
          <div class="mb-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {{ t('skills.title') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                {{ t('skills.titleHighlight') }}
              </span>
            </h2>
            <p class="text-gray-400 text-lg">
              {{ t('skills.subtitle') }}
            </p>
          </div>

          <div class="space-y-6">
            <div v-for="(skill, index) in Skills" :key="skill.id"
                 data-aos="fade-up"
                 :data-aos-delay="index * 50"
                 class="group">

              <!-- Skill Header -->
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 flex items-center justify-center rounded-lg
                              bg-gradient-to-br from-primary/20 to-pink-500/20
                              border border-primary/30
                              transform group-hover:scale-110 group-hover:rotate-6
                              transition-all duration-500">
                    <img :src="skill.icon" alt="skill icon" class="w-6 h-6" />
                  </div>
                  <h4 class="font-semibold text-white">{{ skill.name }}</h4>
                </div>
                <span class="text-xl font-bold text-transparent bg-clip-text
                             bg-gradient-to-r from-primary to-pink-500">
                  {{ skill.width }}
                </span>
              </div>

              <!-- Progress Bar -->
              <div class="h-2 w-full bg-[#111827] rounded-full overflow-hidden
                          border border-[#1f1641]">
                <div class="h-full rounded-full bg-gradient-to-r from-primary via-pink-500 to-purple-500
                            transform origin-left transition-all duration-1000 ease-out
                            group-hover:scale-x-105"
                     :style="`width: ${skill.width}`">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div data-aos="fade-left">
          <div class="mb-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {{ t('skills.experience') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                {{ t('skills.experienceHighlight') }}
              </span>
            </h2>
            <p class="text-gray-400 text-lg">
              {{ t('skills.experienceSubtitle') }}
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(exp, index) in Experinces" :key="exp.id"
                 data-aos="fade-up"
                 :data-aos-delay="index * 50"
                 class="group relative">

              <!-- Experience Card -->
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
                      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-bold text-transparent bg-clip-text
                               bg-gradient-to-r from-primary to-pink-500 mb-1
                               group-hover:scale-105 transition-transform duration-300 origin-left">
                      {{ exp.role }}
                    </h3>
                    <p class="text-white font-medium mb-1">
                      {{ exp.company }}
                    </p>
                    <div class="flex items-center gap-2 text-gray-400 text-sm">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{{ exp.date }}</span>
                    </div>
                    <p v-if="exp.description" class="text-gray-400 text-sm mt-2">
                      {{ exp.description }}
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
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const Skills = ref([
  {
    id: 1,
    name: 'Python',
    width: '90%',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=FFFFFF',
  },
  {
    id: 2,
    name: 'NestJS',
    width: '90%',
    icon: 'https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=FFFFFF',
  },
  {
    id: 3,
    name: 'NodeJS',
    width: '85%',
    icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=FFFFFF',
  },
  {
    id: 4,
    name: 'React',
    width: '75%',
    icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=FFFFFF',
  },
  {
    id: 5,
    name: 'React Native',
    width: '75%',
    icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=FFFFFF',
  },
  {
    id: 6,
    name: 'Vue.js',
    width: '70%',
    icon: 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=FFFFFF',
  },
  {
    id: 7,
    name: 'MongoDB',
    width: '70%',
    icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=FFFFFF',
  },
  {
    id: 8,
    name: 'PostgreSQL',
    width: '70%',
    icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=FFFFFF',
  },
  {
    id: 9,
    name: 'AWS',
    width: '65%',
    icon: 'https://img.icons8.com/?size=100&id=33039&format=png&color=FFFFFF',
  },
  {
    id: 10,
    name: 'Next.js',
    width: '60%',
    icon: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=FFFFFF',
  },
])

const Experinces = computed(() => [
  {
    id: 1,
    role: t('skills.experiences.dev2Role'),
    company: t('skills.experiences.dev2Company'),
    date: t('skills.experiences.dev2Date'),
    description: t('skills.experiences.dev2Desc'),
  },
  {
    id: 2,
    role: t('skills.experiences.dev1Role'),
    company: t('skills.experiences.dev1Company'),
    date: t('skills.experiences.dev1Date'),
    description: t('skills.experiences.dev1Desc'),
  },
  {
    id: 3,
    role: t('skills.experiences.analystRole'),
    company: t('skills.experiences.analystCompany'),
    date: t('skills.experiences.analystDate'),
    description: t('skills.experiences.analystDesc'),
  },
  {
    id: 4,
    role: t('skills.experiences.adminRole'),
    company: t('skills.experiences.adminCompany'),
    date: t('skills.experiences.adminDate'),
    description: t('skills.experiences.adminDesc'),
  },
])
</script>
