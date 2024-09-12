<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { projects } from '@/data/projectsData'; // Importing projects
import { useAnimate, useIntersectionObserver } from '@vueuse/core';

const slider = ref<HTMLElement | null | undefined>(null);

const { play: playSlider, pause: pauseSlider } = useAnimate(
    slider,
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-200%)' }],
    { duration: 60000, iterations: Infinity, easing: 'linear' }
);

onMounted(() => {
    useIntersectionObserver(slider, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            playSlider();
        }
    });
});
</script>

<template>
    <div class="relative pt-12 w-full overflow-scroll justify-center flex flex-col items-center space-y-8">
        <h1 class="text-3xl font-bold text-center z-10">Projects</h1>

        <!-- Background with complex shapes -->
        <div class="absolute inset-0 z-0 overflow-hidden">
            <!-- Black background -->
            <div class="w-full h-full bg-black"></div>

            <!-- Complex Shapes -->
            <!-- Shape 1: Large Electric Blue Circle with subtle animation -->
            <div
                class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900 to-transparent rounded-full opacity-50 blur-2xl animate-pulse-slow">
            </div>

            <!-- Shape 2: Purple Circle with spin animation -->
            <div
                class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-600 to-transparent rounded-full opacity-50 blur-3xl">
            </div>

            <!-- Shape 3: Smaller Blue Circle with rotation and movement -->
            <div
                class="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-900 to-transparent rounded-full opacity-30 blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
            </div>

        </div>

        <!-- Foreground Content -->
        <div class="relative z-10 overflow-scroll w-full py-16">
            <div ref="slider" class="flex gap-8">
                <ProjectCard v-for="(project, index) in [...projects, ...projects]" :key="index" :project="project"
                    @pauseSlider="pauseSlider" @playSlider="playSlider" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom animations for more complex patterns */

@keyframes pulse-slow {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}


@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10%);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 5s infinite;
}

.animate-bounce {
    animation: bounce 6s infinite;
}


/* Custom polygon shape */
.clip-path-polygon {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
