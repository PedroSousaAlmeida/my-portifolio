<template>
  <section class="relative w-full overflow-hidden" data-aos="zoom-in-up">
    <!-- Animated Background Gradients -->
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl opacity-40 animate-pulse"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl animate-pulse animation-delay-2000"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 20" :key="i"
        :class="`absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-float`"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        }">
      </div>
    </div>

    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <!-- Left Content -->
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <!-- Name with gradient and typewriter effect -->
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              <span class="block mb-4 text-gray-400 text-2xl md:text-3xl font-normal">{{ t('hero.greeting') }}</span>
              <span class="typewriter text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-purple-500 animate-gradient">
                {{ displayedText }}<span class="cursor-blink">|</span>
              </span>
            </h1>

            <!-- Role/Title -->
            <div class="mt-6 flex flex-wrap justify-center lg:justify-start gap-2 text-sm md:text-base">
              <span class="px-4 py-2 rounded-full bg-[#111a3e] border border-[#1f1641] text-gray-300
                           hover:border-primary transition-colors duration-300">
                {{ t('hero.role1') }}
              </span>
              <span class="px-4 py-2 rounded-full bg-[#111a3e] border border-[#1f1641] text-gray-300
                           hover:border-secondary transition-colors duration-300">
                {{ t('hero.role2') }}
              </span>
            </div>
          </div>

          <!-- Quote -->
          <div class="relative mt-8">
            <div class="absolute -left-2 top-0 text-6xl text-primary opacity-20">"</div>
            <p class="text-gray-300 text-center lg:text-left mx-auto max-w-xl pl-6 italic">
              {{ t('hero.quote') }}
            </p>
            <p class="text-gray-50 text-center lg:text-left pl-6 mt-2 font-medium">
              - {{ t('hero.quoteAuthor') }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
            <!-- Hire Me Button -->
            <a href="#contact"
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center overflow-hidden">
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-pink-500
                           group-hover:scale-105 origin-center transition-all ease-in-out duration-300"></span>
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative flex items-center justify-center text-white font-medium">
                {{ t('hero.hireMe') }}
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>

            <!-- Download Resume Button -->
            <a href="/resume.pdf" download="resume.pdf"
              class="border-2 border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center
                     hover:bg-primary/10 transition-all duration-300">
              <div class="flex justify-center items-center relative group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="group-hover:animate-bounce" d="M13 9L9 13M9 13L5 9M9 13V1"
                        stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                            20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                            20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                        stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                </svg>
                <span class="pl-2 text-primary font-medium">{{ t('hero.downloadResume') }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Right Content - Image -->
        <div class="lg:h-full md:flex">
          <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
            <!-- Animated Background Glow -->
            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)]
                        bg-gradient-to-tr opacity-30 from-[#570cac] via-primary to-pink-500 blur-2xl
                        animate-pulse">
            </div>

            <!-- Image Container with hover effect -->
            <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16
                        rounded-full shadow-2xl border-2 border-primary group
                        hover:border-pink-500 transition-all duration-500 hover:scale-105">
              <div class="relative w-full h-full rounded-full overflow-hidden">
                <img src="@/assets/top_picture3.jpg" alt="Pedro Almeida - Full Stack Developer"
                     width="500" height="auto" loading="lazy"
                     class="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500">

                <!-- Overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full">
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t } = useI18n();

AOS.init();

// Typewriter effect
const fullText = 'Pedro Almeida';
const displayedText = ref('');
let charIndex = 0;

onMounted(() => {
  const typeWriter = () => {
    if (charIndex < fullText.length) {
      displayedText.value += fullText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 500);
});
</script>

<style scoped>
.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.2;
  }
  50% {
    transform: translateY(-100px) translateX(50px);
    opacity: 0.3;
  }
  90% {
    opacity: 0.2;
  }
}

.animate-float {
  animation: float 10s infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>