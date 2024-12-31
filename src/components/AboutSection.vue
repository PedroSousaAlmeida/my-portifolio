<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8"> Hi, I’m Pedro, a 21-year-old passionate developer. I’ve been
                    happily married for a year to my enchanting princess, Hellen. Programming is not just a hobby for
                    me—it’s my craft and my art. I approach coding with focus, creativity, and seriousness because I
                    truly believe it’s a form of expression.

                    I’m always eager to learn new things, whether it’s in technology or even cooking. While I’ve been
                    practicing my English and improving every day, I admit it’s not my strongest skill, but I’m
                    determined to get better. I’m a lover of cold weather, a huge fan of Harry Potter, and I absolutely
                    enjoy gaming.

                    When it comes to coding, my favorite languages are Python and Node.js, especially using NestJS. I’m
                    deeply interested in clean architecture concepts like DDD, KISS, SOLID, DRY, and others. Lately,
                    I’ve been diving into C#, specifically .NET, and wow, what a fantastic language it is! I also love
                    teaching and sharing knowledge with others.

                    That’s a little about me! If there’s anything else you’d like to know, feel free to ask! 😊
                </p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <!-- Experiência -->
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+4</h3>
                        <p class="text-sm sm:text-base text-gray-300">Years of Experience</p>
                    </div>

                    <!-- Projetos -->
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+6</h3>
                        <p class="text-sm sm:text-base text-gray-300">Projects Worked On</p>
                    </div>

                    <!-- Dedicação à Carreira -->
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">100%</h3>
                        <p class="text-sm sm:text-base text-gray-300">Commitment to Growth</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        School: 'Faculdades Integradas Einstein de Limeira',
        program: 'systems analysis and development',
        year: '2021 - 2023'
    },
    {
        id: 2,
        School: 'Alura',
        program: 'Training Software development using nestjs',
        year: '2024'
    },
    {
        id: 3,
        School: 'Udemy',
        program: 'Training Development using C# .net 9 and clean architecture',
        year: '2024 - At The Moment'
    }

])
</script>