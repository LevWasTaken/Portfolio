<script lang="ts" setup>
import { projects } from '@/data/projectsData';

</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        <div class="projects">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </div>
</template>