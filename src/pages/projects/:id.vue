<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/projectsData';

// Get the project name from the route params
const route = useRoute();
const projectName = route.params.id;
// Find the project data based on the name
const project = computed(() => projects.find((proj) => proj.to.split('/').pop() === projectName));
</script>

<template>
    <ProjectDetailVue v-if="project" :project="project" />
</template>