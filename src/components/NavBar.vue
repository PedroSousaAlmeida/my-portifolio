<template>
  <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
    <img src="../../public/HatchfulExport-All/logo_transparent.png" alt="logo do pedro" class="h-32">
    <!-- Botão para mobile  -->
    <div class="md:hidden z-30">
      <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-5x1">
          <img src="https://img.icons8.com/?size=100&id=66766&format=png&color=FFFFFF" alt="close" width="50"
            height="50" />
        </span>
        <span v-else="isMenuOpen" class="text-5x1">
          <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="menu" width="50"
            height="50" />
        </span>
      </button>
    </div>
    <!-- Navbar link  -->
    <nav :class="[
      'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
      isMenuOpen ? 'block' : 'hidden',
    ]">
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in menu" :key="item.name">
          <a :href="item.href" class="block text-white transition hover:text-primary ease-linear text-2x1 md:text-lg"
            @click="scrollToSection(item.href)">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menu = ref([
  { name: "Services", href: "#services" },
  { name: "About Me", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const isMenuOpen = ref(false);
const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
