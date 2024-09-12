<template>
    <div :class="[itemPositionClass, borderPosition, borderColor]"
        class="relative flex justify-between items-center w-full mb-8">

        <!-- Timeline Content -->
        <div :class="contentPositionClass" class=" p-6 rounded-lg shadow-md w-full">
            <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300">{{ title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ date }}</p>
            <p v-if="description" class="text-gray-600 dark:text-gray-400 mt-2">{{ description }}</p>
            <p v-if="techStack" class="text-gray-600 dark:text-gray-400 text-sm mt-2">
                <strong>Tech Stack:</strong> {{ techStack }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Définir les props avec leurs types
const props = defineProps<{
    position: 'left' | 'right';
    title: string;
    date: string;
    description?: string;
    techStack?: string;
    color: 'blue' | 'green' | 'red';
}>();

// Classe CSS pour gérer la position (gauche ou droite)
const itemPositionClass = computed(() => {
    return props.position === 'left' ? 'flex-row-reverse' : 'flex-row';
});

// Classe CSS pour le contenu (texte à gauche ou à droite)
const contentPositionClass = computed(() => {
    return props.position === 'left' ? 'mr-6 text-left' : 'ml-6 text-right';
});

const borderPosition = computed(() => {
    return props.position === 'left' ? 'border-r-2' : 'border-l-2';
});

const borderColor = computed(() => {
    return props.color === 'blue'
        ? 'border-blue-500'
        : props.color === 'green'
            ? 'border-green-500'
            : 'border-red-500';
});

</script>

<style scoped></style>
