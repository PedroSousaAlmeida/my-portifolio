<template>
  <div class="min-h-screen pt-32 pb-20">
    <!-- Loading State -->
    <div v-if="!project" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-400">Loading project...</p>
      </div>
    </div>

    <!-- Project Content -->
    <div v-else class="max-w-screen-xl mx-auto px-6">
      <!-- Back Button -->
      <router-link to="/#projects"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-primary
               transition-colors duration-300 mb-8 group">
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Back to Projects
      </router-link>

      <!-- Hero Section -->
      <div class="mb-12" data-aos="fade-up">
        <!-- Category and Year -->
        <div class="flex items-center gap-4 mb-4">
          <span class="px-4 py-1.5 bg-gradient-to-r from-primary to-pink-500 rounded-full
                       text-sm font-medium text-white">
            {{ project.category }}
          </span>
          <span class="text-gray-400 text-sm">{{ project.year }}</span>
          <span v-if="project.featured" class="text-yellow-500 text-sm flex items-center gap-1">
            ⭐ Featured Project
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {{ project.title }}
        </h1>

        <!-- Role -->
        <p class="text-xl text-gray-400 mb-6">
          {{ project.role }}
        </p>

        <!-- Short Description -->
        <p class="text-lg text-gray-300 max-w-3xl">
          {{ project.shortDescription }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-4 mt-8">
          <a v-if="project.demoAvailable && project.webURL !== '#'"
             :href="project.webURL"
             target="_blank"
             class="px-6 py-3 bg-gradient-to-r from-primary to-pink-500 rounded-full
                    text-white font-medium hover:shadow-lg hover:shadow-primary/50
                    transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            View Live Demo
          </a>

          <a v-if="project.gitURL !== '#'"
             :href="project.gitURL"
             target="_blank"
             class="px-6 py-3 border-2 border-primary rounded-full text-primary font-medium
                    hover:bg-primary/10 transform hover:scale-105 transition-all duration-300
                    flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <!-- Main Image -->
      <div class="mb-12" data-aos="fade-up" data-aos-delay="100">
        <div class="relative rounded-2xl overflow-hidden border border-primary/20
                    shadow-2xl shadow-primary/10 group cursor-pointer"
             @click="openModal(0)">
          <img :src="project.images[0]"
               :alt="project.title"
               :class="[
                 'w-full object-contain group-hover:scale-105 transition-transform duration-700',
                 project.category === 'mobile app' ? 'max-h-[600px]' : 'h-auto'
               ]">
          <div class="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-white mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
              <p class="text-white font-medium">Click to view full size</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Description -->
          <section data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white mb-6">About the Project</h2>
            <div class="text-gray-300 space-y-4 text-lg leading-relaxed whitespace-pre-line">
              {{ project.description }}
            </div>
          </section>

          <!-- Key Features -->
          <section data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white mb-6">Key Features</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(feature, index) in project.features"
                   :key="index"
                   class="flex items-start gap-3 p-4 bg-[#111a3e]/50 rounded-xl border border-[#1f1641]
                          hover:border-primary/50 transition-colors duration-300">
                <svg class="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <p class="text-gray-300">{{ feature }}</p>
              </div>
            </div>
          </section>

          <!-- Challenges -->
          <section v-if="project.challenges" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white mb-6">Challenges & Solutions</h2>
            <div class="space-y-4">
              <div v-for="(challenge, index) in project.challenges"
                   :key="index"
                   class="p-5 bg-[#111a3e]/50 rounded-xl border border-[#1f1641]
                          hover:border-pink-500/50 transition-colors duration-300">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-primary to-pink-500 rounded-full
                              flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {{ index + 1 }}
                  </div>
                  <p class="text-gray-300 pt-1">{{ challenge }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Gallery -->
          <section v-if="project.images.length > 1" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white mb-6">Project Gallery</h2>
            <div :class="[
              'grid gap-4',
              project.category === 'mobile app' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4' : 'sm:grid-cols-2'
            ]">
              <div v-for="(image, index) in project.images.slice(1)"
                   :key="index"
                   @click="openModal(index + 1)"
                   class="relative rounded-xl overflow-hidden border border-[#1f1641]
                          hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <img :src="image"
                     :alt="`${project.title} screenshot ${index + 2}`"
                     :class="[
                       'w-full object-contain group-hover:scale-110 transition-transform duration-500',
                       project.category === 'mobile app' ? 'h-48 md:h-56' : 'h-64 object-cover'
                     ]">
                <div class="absolute inset-0 bg-gradient-to-t from-[#111827]/90 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex items-center justify-center">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Technologies -->
          <section data-aos="fade-up" data-aos-delay="200">
            <div class="sticky top-32 space-y-8">
              <div class="p-6 bg-[#111a3e]/50 rounded-2xl border border-[#1f1641]">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  Technologies Used
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tech, index) in project.technologies"
                        :key="index"
                        class="px-3 py-2 bg-[#111827]/50 rounded-lg border border-primary/20
                               text-gray-300 text-sm hover:border-primary/50 hover:scale-105
                               transition-all duration-300">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Project Info -->
              <div class="p-6 bg-[#111a3e]/50 rounded-2xl border border-[#1f1641]">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Project Info
                </h3>
                <div class="space-y-3">
                  <div class="flex justify-between items-center py-2 border-b border-[#1f1641]">
                    <span class="text-gray-400">Year</span>
                    <span class="text-white font-medium">{{ project.year }}</span>
                  </div>
                  <div class="flex justify-between items-center py-2 border-b border-[#1f1641]">
                    <span class="text-gray-400">Role</span>
                    <span class="text-white font-medium">{{ project.role }}</span>
                  </div>
                  <div class="flex justify-between items-center py-2 border-b border-[#1f1641]">
                    <span class="text-gray-400">Category</span>
                    <span class="text-white font-medium">{{ project.category }}</span>
                  </div>
                  <div class="flex justify-between items-center py-2">
                    <span class="text-gray-400">Status</span>
                    <span class="text-green-500 font-medium flex items-center gap-1">
                      <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Live
                    </span>
                  </div>
                </div>
              </div>

              <!-- Share -->
              <div class="p-6 bg-[#111a3e]/50 rounded-2xl border border-[#1f1641]">
                <h3 class="text-xl font-bold text-white mb-4">Share Project</h3>
                <div class="flex gap-3">
                  <button class="flex-1 p-3 bg-[#111827]/50 rounded-lg border border-[#1f1641]
                                 hover:border-primary hover:scale-105 transition-all duration-300">
                    <svg class="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button class="flex-1 p-3 bg-[#111827]/50 rounded-lg border border-[#1f1641]
                                 hover:border-primary hover:scale-105 transition-all duration-300">
                    <svg class="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button class="flex-1 p-3 bg-[#111827]/50 rounded-lg border border-[#1f1641]
                                 hover:border-primary hover:scale-105 transition-all duration-300">
                    <svg class="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Next/Previous Projects -->
      <section class="mt-20 pt-12 border-t border-[#1f1641]" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">More Projects</h2>
        <div class="flex justify-center">
          <router-link to="/#projects"
            class="px-8 py-3 bg-gradient-to-r from-primary to-pink-500 rounded-full
                   text-white font-medium hover:shadow-lg hover:shadow-primary/50
                   transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            View All Projects
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </section>
    </div>

    <!-- Image Modal -->
    <ImageModal
      v-if="project"
      :images="project.images"
      :start-index="selectedImageIndex"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getProjectById } from '@/data/projects';
import ImageModal from '@/components/ImageModal.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const route = useRoute();
const project = ref(null);

// Modal state
const isModalOpen = ref(false);
const selectedImageIndex = ref(0);

const openModal = (index) => {
  selectedImageIndex.value = index;
  isModalOpen.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = '';
};

onMounted(() => {
  AOS.init();

  const projectId = parseInt(route.params.id);
  project.value = getProjectById(projectId);

  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
