<template>
    <div class=" p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-4 text-purple-400">{{ title }}</h3>
        <p class="text-sm text-gray-700 dark:text-gray-200 mb-4">{{ description }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String
});
</script>
