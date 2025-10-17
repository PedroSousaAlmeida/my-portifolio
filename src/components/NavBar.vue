<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
    <div class="max-w-screen-xl mx-auto px-6 flex justify-center items-center">
      <!-- Desktop Navigation Card -->
      <nav class="hidden md:block">
        <div :class="[
          'px-8 py-4 rounded-full transition-all duration-300',
          'backdrop-blur-md bg-[#111827]/80 border shadow-lg',
          isScrolled ? 'border-primary/30 shadow-primary/20' : 'border-[#1f1641] shadow-black/50'
        ]">
          <div class="flex items-center gap-6">
            <ul class="flex items-center space-x-8">
              <li v-for="item in menu" :key="item.name">
                <a :href="item.href"
                   @click.prevent="scrollToSection(item.href)"
                   :class="[
                     'relative text-lg font-medium transition-all duration-300 px-4 py-2 rounded-full',
                     activeSection === item.href.substring(1)
                       ? 'text-white bg-gradient-to-r from-primary to-pink-500 shadow-lg shadow-primary/50'
                       : 'text-gray-300 hover:text-primary'
                   ]">
                  {{ item.name }}
                </a>
              </li>
            </ul>
            <div class="h-8 w-px bg-gray-700"></div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        :class="[
          'md:hidden relative z-50 w-14 h-14 flex flex-col items-center justify-center',
          'focus:outline-none rounded-full backdrop-blur-md bg-[#111827]/80',
          'border shadow-lg transition-all duration-300',
          isScrolled ? 'border-primary/30 shadow-primary/20' : 'border-[#1f1641] shadow-black/50'
        ]"
        aria-label="Toggle menu">
        <!-- Hamburger Icon -->
        <span :class="[
          'block w-6 h-0.5 bg-white transform transition-all duration-300',
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        ]"></span>
        <span :class="[
          'block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300',
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        ]"></span>
        <span :class="[
          'block w-6 h-0.5 bg-white mt-1.5 transform transition-all duration-300',
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        ]"></span>
      </button>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <nav v-if="isMenuOpen"
             class="fixed inset-0 z-40 md:hidden flex items-center justify-center
                    bg-[#111827]/95 backdrop-blur-lg">
          <!-- Animated Background -->
          <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          </div>

          <ul class="relative flex flex-col items-center space-y-6">
            <li v-for="(item, index) in menu" :key="item.name"
                :style="{ animationDelay: `${index * 100}ms` }"
                class="menu-item-enter">
              <a :href="item.href"
                 @click.prevent="scrollToSection(item.href)"
                 :class="[
                   'text-3xl font-bold transition-all duration-300 px-6 py-3 rounded-full inline-block',
                   activeSection === item.href.substring(1)
                     ? 'bg-gradient-to-r from-primary to-pink-500 text-white'
                     : 'text-white hover:text-primary hover:scale-110'
                 ]">
                {{ item.name }}
              </a>
            </li>
            <li class="menu-item-enter pt-4" :style="{ animationDelay: `${menu.length * 100}ms` }">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const router = useRouter();
const { t } = useI18n();

const menu = computed(() => [
  { name: t('nav.services'), href: "#services" },
  { name: t('nav.about'), href: "#about" },
  { name: t('nav.skills'), href: "#skills" },
  { name: t('nav.projects'), href: "#projects" },
  { name: t('nav.contact'), href: "#contact" },
]);

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref("");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Detect active section
  const sections = menu.value.map(item => item.href.substring(1));

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Check if section is in viewport (with some offset for better UX)
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = sectionId;
        break;
      }
    }
  }

  // If at top of page, clear active section
  if (window.scrollY < 100) {
    activeSection.value = "";
  }
};

const scrollToSection = (href) => {
  isMenuOpen.value = false;

  // Check if we're on home page
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  } else {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* Menu items animation */
.menu-item-enter {
  animation: slideInUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>
