<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <h2 class="text-4xl font-bold text-white text-left mb-4">My
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                    <div class="flex items-end justify-between" data-aos="fade-right">
                        <img :src="skill.icon" alt="icon" class="h-6 w-6">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                        <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-primary" :style="`width: ${skill.width}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                        class="flex  items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.role }}
                            </h3>
                            <p class="text-white">{{ element.company }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const Skills = ref([
    { id: 1, name: '.NET', width: '30%', icon: 'https://img.icons8.com/?size=100&id=1hX8jwYkynSh&format=png&color=FFFFFF' },
    { id: 2, name: 'VueJS', width: '50%', icon: 'https://img.icons8.com/?size=100&id=jJiJv1vX3dVG&format=png&color=FFFFFF' },
    { id: 3, name: 'PostgreSQL', width: '70%', icon: 'https://img.icons8.com/?size=100&id=25010&format=png&color=FFFFFF' },
    { id: 4, name: 'Python', width: '90%', icon: 'https://img.icons8.com/?size=100&id=12592&format=png&color=FFFFFF' },
    { id: 5, name: 'NestJS', width: '90%', icon: 'https://img.icons8.com/?size=100&id=izN2RDcKuMtA&format=png&color=FFFFFF' },
    { id: 6, name: 'NodeJS', width: '85%', icon: 'https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png&color=FFFFFF' }
]);

const Experinces = ref([
    {
        id: 1,
        role: 'Associate Developer',
        company: 'SolutionsBI',
        date: 'February 2024 - At The Moment'
    },
    {
        id: 2,
        role: 'Data Analyst',
        company: 'SolutionsBI',
        date: 'July 2023 - February 2024'
    },
    {
        id: 2,
        role: 'Control and planning analyst',
        company: 'São Martinho',
        date: 'July 2022 - August 2023'
    },
])
</script>