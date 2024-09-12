<script setup lang="ts">
function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
const arrowDown = ref();

onMounted(() => {
    const arrowDownElement = arrowDown.value;
    if (arrowDownElement) {
        arrowDownElement.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(0)' },
            ],
            {
                duration: 1000,
                iterations: Infinity,
            }
        );
    }
});
</script>
<template>
    <div class="grid grid-cols-2 px-2 items-center gap-4 pb-8 h-screen">
        <div class="flex flex-col text-start text-xl md:text-5xl font-bold space-y-4 pt-8 md:pt-0">
            <p>Welcome to my portfolio !</p>
            <p>
                I'm
                <span class="decoration-purple-400 underline">Arthur Boulliaux</span>.
            </p>
            <div class="pt-4 space-y-4">
                <p class="text-sm text-start text-gray-700 dark:text-gray-200">
                    Full-stack developer with a degree in software engineering from ESIEA, I have a strong expertise in
                    web
                    development, specializing in Vue.js, Node.js, and TypeScript.
                </p>
                <p class="text-sm text-start text-gray-700 dark:text-gray-200">
                    My background includes two years of experience in full-stack development, where I contributed to
                    creating dynamic, responsive applications and managed data using modern frameworks.
                </p>
            </div>
        </div>
        <img src="@/assets/arthur3d2.png" alt="Arthur Boulliaux"
            class=" pt-15 md:pt-0 h-128 w-128 md:h-72 md:w-72 object-cover transform transition duration-500 hover:scale-105 mx-auto" />
        <div class="col-span-2 flex justify-center">
            <div class="i-heroicons-arrow-down h-6 w-6 md:h-12 md:w-12 text-gray-700 dark:text-gray-200 cursor-pointer"
                ref="arrowDown" @click="scrollToSection('skills')">
            </div>
        </div>
    </div>
</template>
