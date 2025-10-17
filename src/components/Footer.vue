<template>
  <footer
    class="relative mt-20 border-t border-[#1f1641] text-white overflow-hidden"
  >
    <!-- Background Glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/10 to-transparent blur-3xl"
    ></div>

    <div class="relative z-10 max-w-screen-xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- About Column -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
            >
              Pedro Almeida
            </span>
          </h3>
          <p class="text-gray-400 mb-6 max-w-md">
            Full Stack Developer passionate about creating amazing web
            experiences with clean code and modern technologies.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              href="https://github.com/PedroSousaAlmeida"
              target="_blank"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#111a3e]/50 border border-[#1f1641] hover:border-primary hover:bg-primary/10 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg
                class="w-5 h-5 text-gray-400 hover:text-primary transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-henrique-sousa-almeida-269406211/"
              target="_blank"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#111a3e]/50 border border-[#1f1641] hover:border-primary hover:bg-primary/10 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg
                class="w-5 h-5 text-gray-400 hover:text-primary transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>

            <a
              href="mailto:pedro.almeida.work@example.com"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#111a3e]/50 border border-[#1f1641] hover:border-primary hover:bg-primary/10 transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <svg
                class="w-5 h-5 text-gray-400 hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#services"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Tech Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Vue.js
            </span>
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              NestJS
            </span>
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              TypeScript
            </span>
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              MongoDB
            </span>
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              .NET
            </span>
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Python
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-[#1f1641]">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Pedro Almeida. All rights reserved.
          </p>

          <div class="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <svg
              class="w-4 h-4 text-pink-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span>by Pedro Almeida</span>
          </div>

          <button
            @click="scrollToTop"
            class="px-4 py-2 rounded-full bg-[#111a3e]/50 border border-[#1f1641] text-gray-400 hover:text-primary hover:border-primary transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
