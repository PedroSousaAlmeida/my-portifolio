<template>
  <section class="text-white mt-20 py-16" id="projects">
    <div class="px-4 xl:px-16 max-w-screen-xl mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
          >
            Latest Projects
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my recent work showcasing modern web development, clean
          architecture, and innovative solutions
        </p>
      </div>

      <!-- Filter Buttons -->
      <div
        class="flex flex-wrap justify-center gap-3 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
            selectedCategory === category
              ? 'bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg shadow-primary/50'
              : 'bg-[#111a3e] border border-[#1f1641] text-gray-300 hover:border-primary',
          ]"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="group cursor-pointer"
          @click="goToProject(project.id)"
        >
          <!-- Project Card -->
          <div
            class="relative h-full flex flex-col bg-[#111a3e]/50 backdrop-blur-sm rounded-2xl border border-[#1f1641] overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <!-- Overlay on Hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4"
              >
                <!-- Featured Badge -->
                <div
                  v-if="project.featured"
                  class="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-pink-500 rounded-full text-xs font-bold text-white"
                >
                  ⭐ Featured
                </div>

                <!-- Action Buttons -->
                <div
                  class="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <a
                    v-if="project.gitURL && project.gitURL !== '#'"
                    :href="project.gitURL"
                    target="_blank"
                    @click.stop
                    class="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    title="View on GitHub"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>

                  <a
                    v-if="
                      project.webURL &&
                      project.webURL !== '#' &&
                      project.demoAvailable
                    "
                    :href="project.webURL"
                    target="_blank"
                    @click.stop
                    class="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    title="View Live Demo"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <button
                    class="p-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 hover:bg-primary/30 hover:scale-110 transition-all duration-300"
                    title="View Details"
                  >
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                <!-- View Details Text -->
                <p
                  class="text-white font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                >
                  Click to view details
                </p>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 p-6 flex flex-col">
              <!-- Title and Category -->
              <div class="mb-3">
                <span
                  class="text-xs font-medium text-primary uppercase tracking-wider"
                >
                  {{ project.category }}
                </span>
                <h3
                  class="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>
              </div>

              <!-- Short Description -->
              <p class="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                {{ project.shortDescription }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in project.technologies.slice(0, 4)"
                  :key="i"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-[#111827]/50 border border-primary/20 text-gray-300 hover:border-primary/50 transition-colors duration-300"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 4"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-[#111827]/50 border border-pink-500/20 text-gray-300"
                >
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>

              <!-- Footer -->
              <div
                class="mt-4 pt-4 border-t border-[#1f1641] flex items-center justify-between"
              >
                <span class="text-xs text-gray-500">{{ project.year }}</span>
                <span class="text-xs font-medium text-gray-400">{{
                  project.role
                }}</span>
              </div>
            </div>

            <!-- Glow Effect on Hover -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            >
              <div
                class="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
              ></div>
              <div
                class="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16"
        data-aos="fade-up"
      >
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-white mb-2">No projects found</h3>
        <p class="text-gray-400">Try selecting a different category</p>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <button
          class="px-8 py-3 bg-gradient-to-r from-primary to-pink-500 rounded-full font-medium text-white hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
        >
          View All Projects
          <svg
            class="inline-block w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { projects, getProjectsByCategory } from '@/data/projects'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const router = useRouter()

const categories = ref(['all', 'web development', 'backend', 'mobile app'])
const selectedCategory = ref('all')

const filteredProjects = computed(() => {
  return getProjectsByCategory(selectedCategory.value)
})

const goToProject = (projectId) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
