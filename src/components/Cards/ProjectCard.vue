<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { project } = defineProps<{
    project: {
        title: string;
        description: string;
        path: string;
        type: 'student' | 'professional';
        technologies: Array<'Vue' | 'Node' | 'GraphQL' | 'Tailwind' | 'TypeScript' | 'JavaScript' | 'Socket' | 'Babylon' | 'React' | 'Spring' | 'Java' | 'Python' | 'HTML' | 'CSS'>;
        date: string;
        to: string;
    };
}>();

const projectCard = ref<HTMLElement | null>(null);

const pauseSlider = defineEmits<{
    (e: 'pauseSlider'): void;
    (e: 'playSlider'): void;
}>();

const breakLoopOnMouseEnter = () => {
    pauseSlider('pauseSlider');
};

const resumeLoopOnMouseLeave = () => {
    pauseSlider('playSlider');
};

const mdiIconsMap = {
    Vue: 'i-mdi-vuejs',
    Node: 'i-mdi-nodejs',
    GraphQL: 'i-mdi-graphql',
    Tailwind: 'i-mdi-tailwind',
    TypeScript: 'i-mdi-language-typescript',
    JavaScript: 'i-mdi-language-javascript',
    Socket: 'i-mdi-power-socket-eu',
    Babylon: 'i-mdi-cube-outline',
    React: 'i-mdi-react',
    Spring: 'i-mdi-leaf',
    Java: 'i-mdi-language-java',
    Python: 'i-mdi-language-python',
    HTML: 'i-mdi-language-html5',
    CSS: 'i-mdi-language-css3',
};

const onClick = () => {
    if (!project.to) return;
    router.push(project.to);
};
</script>

<template>
    <div ref="projectCard"
        class="relative flex-shrink-0 w-full max-w-xs md:max-w-md lg:max-w-lg h-auto md:h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        @mouseenter="breakLoopOnMouseEnter" @mouseleave="resumeLoopOnMouseLeave" @click="onClick">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img :src="project.path" alt="Project image" class="w-full h-full object-cover opacity-60" />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <!-- Content Overlay -->
        <div class="relative z-10 p-4 md:p-6 flex flex-col h-full justify-between">
            <div class="flex gap-2 justify-between items-center">
                <div class="flex gap-2">
                    <div v-for="tech in project.technologies" :key="tech">
                        <div :class="[mdiIconsMap[tech], 'text-xl md:text-2xl text-white']" />
                    </div>
                </div>
                <div class="text-white text-xs md:text-sm font-bold">{{ project.date }}</div>
            </div>
            <h3 class="text-white text-lg md:text-2xl font-bold mb-2">
                {{ project.title }}
            </h3>
            <p class="text-gray-200 text-xs md:text-sm line-clamp-3">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Responsive height for images */
@media (max-width: 768px) {
    .project-card {
        height: auto;
    }
}
</style>
