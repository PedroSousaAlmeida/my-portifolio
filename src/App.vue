<template>
  <div class="bg-[#111827] min-h-screen">
    <!-- Scroll Progress Indicator -->
    <div
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 transition-all duration-300"
      :style="{ width: scrollProgress + '%' }"
    ></div>

    <!-- Wrap components in Suspense to handle loading -->
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <!-- Router View with transitions -->
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue';

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
import loadingSpinner from './components/loadingSpinner.vue';

// Scroll Progress
const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>
<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}

/* Route Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>