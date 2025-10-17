<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      @click="closeModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white text-2xl font-bold z-10"
        aria-label="Close"
      >
        ×
      </button>

      <!-- Image Counter -->
      <div
        class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium z-10"
      >
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>

      <!-- Previous Button -->
      <button
        v-if="images.length > 1"
        @click.stop="previousImage"
        class="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white text-2xl font-bold z-10"
        aria-label="Previous"
      >
        ←
      </button>

      <!-- Main Image Container -->
      <div
        @click.stop
        class="relative flex items-center justify-center max-h-[90vh] max-w-[90vw] p-4"
      >
        <!-- Loading Spinner -->
        <div
          v-if="imageLoading"
          class="absolute inset-0 flex items-center justify-center"
        >
          <svg
            class="animate-spin h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>

        <!-- Main Image -->
        <img
          :src="images[currentIndex]"
          :alt="`Image ${currentIndex + 1}`"
          @load="imageLoading = false"
          @error="imageLoading = false"
          class="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
          :class="{ 'opacity-0': imageLoading, 'opacity-100': !imageLoading }"
        />
      </div>

      <!-- Next Button -->
      <button
        v-if="images.length > 1"
        @click.stop="nextImage"
        class="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white text-2xl font-bold z-10"
        aria-label="Next"
      >
        →
      </button>

      <!-- Thumbnail Navigation -->
      <div
        v-if="images.length > 1"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
      >
        <button
          v-for="(image, index) in images"
          :key="index"
          @click.stop="currentIndex = index"
          :class="[
            'w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0',
            currentIndex === index
              ? 'border-primary scale-110 shadow-lg shadow-primary/50'
              : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100',
          ]"
        >
          <img
            :src="image"
            :alt="`Thumbnail ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  startIndex: {
    type: Number,
    default: 0,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.startIndex)
const imageLoading = ref(true)

// Watch for startIndex changes
watch(
  () => props.startIndex,
  (newIndex) => {
    currentIndex.value = newIndex
    imageLoading.value = true
  }
)

// Watch for image changes
watch(currentIndex, () => {
  imageLoading.value = true
})

const closeModal = () => {
  emit('close')
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const previousImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') previousImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Hide scrollbar for thumbnail navigation */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
