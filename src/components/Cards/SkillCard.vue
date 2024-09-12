<template>
    <div class="relative flex flex-col items-center space-y-4">
        <!-- Icon that triggers the hover -->
        <div @mouseover="hoverStart" @mouseleave="hoverEnd"
            :class="[icon, colorMap[color], 'text-6xl transition-all duration-300 ease-in-out transform hover:scale-110']">
        </div>

        <p class="text-2xl font-bold">{{ title }}</p>

        <!-- Speech bubble card -->
        <div v-show="description" ref="cardRef" class="absolute bottom-25 left-0 md:bottom-20 md:left-40 lg:bottom-25 lg:left-50 xl:bottom-30 xl:left-65 bg-white p-1 md:p-4 rounded-lg shadow-xl z-1 w-32 md:w-48 lg:w-64 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200
        transform scale-0 opacity-0 origin-bottom transition-all duration-500 ease-in-out"
            :class="{ 'scale-100 opacity-100 animate-bounce-in': showCard, 'scale-0 opacity-0': !showCard }">
            <!-- Bubble tail (Bottom Left) -->
            <div
                class="absolute bottom-[-10px] left-4 transform -translate-x-1 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white dark:border-t-gray-800">
            </div>
            <!-- Bubble content -->
            <div class="flex flex-col space-y-2">
                <p class="font-bold text-xs">{{ title }} - {{ years > 1 ? years + ' years' : years + ' year'
                    }}</p>
                <hr class="my-2 border-gray-300 dark:border-gray-700" />
                <p class="text-xxs md:text-xs text-start leading-tight">{{ description }}</p>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { icon, color, title, description, years } = defineProps({
    icon: String,
    color: String,
    title: String,
    description: String,
    years: Number, // New prop for years of experience
});

const colorMap = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400',
    yellow: 'text-yellow-400',
    red: 'text-red-400',
    indigo: 'text-indigo-400',
    gray: 'text-gray-400',
};

const showCard = ref(false);

const hoverStart = () => {
    showCard.value = true;
};

const hoverEnd = () => {
    showCard.value = false;
};
</script>

<!-- Tailwind CSS in your global CSS file -->
<style>
@layer utilities {
    @keyframes bounceIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }

        60% {
            transform: scale(1.2);
            opacity: 1;
        }

        80% {
            transform: scale(0.9);
        }

        100% {
            transform: scale(1);
        }
    }

    .animate-bounce-in {
        animation: bounceIn 0.6s ease-in-out forwards;
    }
}
</style>
