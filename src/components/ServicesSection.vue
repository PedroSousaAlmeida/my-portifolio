<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/?size=100&id=12486&format=png&color=FFFFFF',
        name: 'WEB FRONTEND DEVELOPMENT',
        description: "The art and science of building dynamic, interactive, and user-friendly websites and web applications using modern technologies and frameworks."
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/?size=100&id=2778&format=png&color=FFFFFF',
        name: 'BACKEND DEVELOPMENT',
        description: "The process of creating the server-side logic, database management, and API integrations that power web applications and ensure seamless functionality."
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/?size=100&id=al1VlNCK9eK5&format=png&color=FFFFFF',
        name: 'AWS DEVELOPMENT',
        description: "Leveraging Amazon Web Services (AWS) to design, deploy, and manage scalable, secure, and reliable cloud-based applications and infrastructure."
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/?size=100&id=BtKtpw0I04Ie&format=png&color=FFFFFF',
        name: "DATA ANALYSIS & VISUALIZATION",
        description: "Transforming data into actionable insights using Power BI, Python, and Excel, with experience in automation using Power Apps."
    },
    {
        id: 5,
        icon: "https://img.icons8.com/?size=100&id=8305&format=png&color=FFFFFF",
        name: "DATABASE MANAGEMENT",
        description: "Designing, managing, and optimizing databases using PostgreSQL and MySQL, with experience in data analysis through Analysis Services."
    },
    {
        id: 6,
        icon: "https://img.icons8.com/?size=100&id=41303&format=png&color=FFFFFF",
        name: "CLEAN ARCHITECTURE",
        description: "Applying Clean Architecture principles to ensure modular, testable, and scalable software development. This approach focuses on separation of concerns, making the codebase easy to maintain and extend over time."
    }
])


</script>

<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>
        <div class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="services.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg broder border-[#1f1641]">
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3
                        class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
