<template>
  <section class="text-white mt-20 py-16 relative overflow-hidden" id="contact">
    <!-- Background Glow -->
    <div
      class="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 via-pink-500/10 to-purple-500/10 blur-3xl"
    ></div>

    <div class="max-w-screen-xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('contact.title') }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
          >
            {{ t('contact.titleHighlight') }}
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div data-aos="fade-right">
          <!-- Description -->
          <div
            class="mb-8 p-6 rounded-2xl bg-[#111a3e]/30 backdrop-blur-sm border border-[#1f1641]"
          >
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ t('contact.description1') }}
            </p>
            <p class="text-gray-300 leading-relaxed">
              {{ t('contact.description2') }}
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-4">
            <!-- Email -->
            <div class="group" data-aos="fade-up" data-aos-delay="100">
              <div
                class="flex items-center gap-4 p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm border border-[#1f1641] hover:border-primary/50 transform transition-all duration-500 hover:scale-105"
              >
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-white font-semibold mb-1">
                    {{ t('contact.email') }}
                  </h4>
                  <a
                    href="mailto:pedro.almeida.work@outlook.com"
                    class="text-gray-400 hover:text-primary transition-colors text-sm truncate block"
                  >
                    pedro.almeida.work@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="group" data-aos="fade-up" data-aos-delay="200">
              <div
                class="flex items-center gap-4 p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm border border-[#1f1641] hover:border-primary/50 transform transition-all duration-500 hover:scale-105"
              >
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-semibold mb-1">
                    {{ t('contact.phone') }}
                  </h4>
                  <a
                    href="tel:+5519998924002"
                    class="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    +55 (19) 9 9989-4002
                  </a>
                </div>
              </div>
            </div>

            <!-- LinkedIn -->
            <div class="group" data-aos="fade-up" data-aos-delay="300">
              <div
                class="flex items-center gap-4 p-4 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm border border-[#1f1641] hover:border-primary/50 transform transition-all duration-500 hover:scale-105"
              >
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                >
                  <svg
                    class="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-white font-semibold mb-1">
                    {{ t('contact.linkedin') }}
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/pedro-henrique-sousa-almeida-269406211/"
                    target="_blank"
                    class="text-gray-400 hover:text-primary transition-colors text-sm truncate block"
                  >
                    Pedro Henrique Sousa Almeida
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div data-aos="fade-left">
          <form
            @submit.prevent="sendEmail"
            class="p-8 rounded-2xl bg-[#111a3e]/50 backdrop-blur-sm border border-[#1f1641] shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            <!-- Success Message -->
            <div
              v-if="formStatus === 'success'"
              class="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 flex items-center gap-3"
            >
              <svg
                class="w-6 h-6 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-green-500 text-sm">
                {{ t('contact.form.success') }}
              </p>
            </div>

            <!-- Error Message -->
            <div
              v-if="formStatus === 'error'"
              class="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-3"
            >
              <svg
                class="w-6 h-6 text-red-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p class="text-red-500 text-sm">{{ t('contact.form.error') }}</p>
            </div>

            <!-- Name Field -->
            <div class="mb-6">
              <label for="name" class="block text-white font-medium mb-2">
                {{ t('contact.form.name') }}
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                :disabled="formStatus === 'sending'"
                class="w-full px-4 py-3 bg-[#111827] border border-[#1f1641] rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                :placeholder="t('contact.form.namePlaceholder')"
              />
            </div>

            <!-- Email Field -->
            <div class="mb-6">
              <label for="email" class="block text-white font-medium mb-2">
                {{ t('contact.form.email') }}
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                :disabled="formStatus === 'sending'"
                class="w-full px-4 py-3 bg-[#111827] border border-[#1f1641] rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                :placeholder="t('contact.form.emailPlaceholder')"
              />
            </div>

            <!-- Subject Field -->
            <div class="mb-6">
              <label for="subject" class="block text-white font-medium mb-2">
                {{ t('contact.form.subject') }}
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                :disabled="formStatus === 'sending'"
                class="w-full px-4 py-3 bg-[#111827] border border-[#1f1641] rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                :placeholder="t('contact.form.subjectPlaceholder')"
              />
            </div>

            <!-- Message Field -->
            <div class="mb-6">
              <label for="message" class="block text-white font-medium mb-2">
                {{ t('contact.form.message') }}
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                :disabled="formStatus === 'sending'"
                rows="5"
                class="w-full px-4 py-3 bg-[#111827] border border-[#1f1641] rounded-xl text-white placeholder-gray-500 resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                :placeholder="t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="formStatus === 'sending'"
              class="w-full px-6 py-3 bg-gradient-to-r from-primary to-pink-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <span v-if="formStatus === 'sending'">
                <svg
                  class="animate-spin h-5 w-5 text-white"
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
                {{ t('contact.form.sending') }}
              </span>
              <span v-else class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                {{ t('contact.form.send') }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formStatus = ref('')

const sendEmail = async () => {
  formStatus.value = 'sending'

  try {
    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
      to_email: 'pedro.almeida.work@outlook.com'
    }

    await emailjs.send(
      'service_wzulbsy',
      'template_1vpa0ip',
      templateParams,
      'ptqWnXL6v9RlP2z4N'
    )

    formStatus.value = 'success'

    setTimeout(() => {
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      formStatus.value = ''
    }, 3000)

  } catch (error) {
    console.error('Error sending email:', error)
    formStatus.value = 'error'

    setTimeout(() => {
      formStatus.value = ''
    }, 5000)
  }
}
</script>
