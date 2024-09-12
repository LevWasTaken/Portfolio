<script lang="ts" setup>
import type { Project } from '@/data/projectsData';
defineProps<{
    project: Project;
}>();

// scroll to top on page load
onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div v-if="project" class="flex items-center justify-center my-auto min-h-screen p-4">
        <div
            class="relative w-full max-w-full md:max-w-3xl lg:max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
            <!-- Custom Header with Dynamic Title and Gradient Background -->
            <div :style="{ backgroundColor: project.colorTheme }"
                class="relative p-6 md:p-8 text-white bg-gradient-to-r from-gray-900 to-gray-800 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700">
                <h1 class="text-md md:text-3xl font-bold">{{ project.title }}</h1>
                <p class="mt-2 text-xs md:text-sm opacity-80">{{ project.date }} •
                    <span v-if="project.type === 'professional'"
                        class="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">Professional</span>
                    <span v-else class="bg-green-400 text-white px-2 py-1 rounded-full text-xs">Student</span>
                </p>

                <!-- Back Button -->
                <button @click="$router.back()"
                    class="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-white bg-transparent hover:bg-gray-800 dark:hover:bg-gray-600">
                    <div class="i-mdi-arrow-left"></div>
                </button>
            </div>

            <!-- Content Section with smaller image thumbnail -->
            <div class="p-6 md:p-8 dark:text-gray-300">
                <div class="flex flex-col md:flex-row items-start gap-4">
                    <!-- Small thumbnail -->
                    <img :src="project.path" alt="Project image"
                        class="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg border-2 border-gray-300 dark:border-gray-700 shadow-md absolute top-4 left-4 md:static">

                    <!-- Main description with improved readability -->
                    <div class="flex-1">
                        <div class="overflow-y-scroll max-h-64">
                            <p
                                class="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-8 tracking-wide whitespace-pre-wrap">
                                {{ project.descriptionLong }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Technologies Section -->
                <div class="flex flex-wrap gap-4 mt-8 text-center justify-center">
                    <span v-for="(tech, index) in project.technologies" :key="index"
                        class="px-3 py-1 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600">
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="flex items-center justify-center min-h-screen bg-gray-900 dark:bg-gray-800">
        <p class="text-white dark:text-gray-300">Project not found.</p>
    </div>
</template>
