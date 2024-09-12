<script lang="ts" setup>
import MainSection from '@/components/Sections/MainSection.vue';
import SkillsSection from '@/components/Sections/SkillsSection.vue';
import InterestsSection from '@/components/Sections/InterestsSection.vue';
import ContactSection from '@/components/Sections/ContactSection.vue';
import ProjectsSection from '@/components/Sections/ProjectsSection.vue';
import ExperienceSection from '@/components/Sections/ExperienceSection.vue';

import { useAnimate, useIntersectionObserver } from '@vueuse/core';
import { ref, onMounted } from 'vue';

const el = ref(null);
const skillsSection = ref(null);
const contactSection = ref(null);

useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 30%)' },
    { clipPath: 'circle(20% at 80% 30%)' },
    { clipPath: 'circle(20% at 50% 30%)' },
    { clipPath: 'circle(20% at 80% 30%)' },
    { clipPath: 'circle(20% at 70% 30%)' },
    { clipPath: 'circle(20% at 70% 30%)' },
    { clipPath: 'circle(100% at 50% 50%)' },
  ],
  {
    iterations: 1,
    duration: 5000,
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
    fill: 'forwards',
  }
);


const { play: playSkills } = useAnimate(
  skillsSection,
  [{ opacity: 0, transform: 'translateY(-50px)' }, { opacity: 1, transform: 'translateY(0)' }],
  { duration: 1000, fill: 'forwards', iterations: 1 }
);

const { play: playContact } = useAnimate(
  contactSection,
  [{ opacity: 0, transform: 'translateY(100px)' }, { opacity: 1, transform: 'translateY(0)' }],
  { duration: 1000, fill: 'forwards' }
);

onMounted(() => {
  const script = document.createElement('script');
  script.src = "//www.instagram.com/embed.js";
  script.async = true;
  document.body.appendChild(script);

  useIntersectionObserver(skillsSection, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      playSkills();
    }
  });

  useIntersectionObserver(contactSection, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      playContact();
    }
  });
});
</script>

<template>
  <div class="flex-1 relative md:px-8 space-y-10 md:space-y-20">
    <MainSection ref="el" />
    <div id="skills" class="pt-12"></div>
    <div class="h-1 w-full bg-gray-200 dark:bg-gray-700"></div>
    <SkillsSection ref="skillsSection" />
    <div class="h-1 w-full bg-gray-200 dark:bg-gray-700"></div>
    <ProjectsSection />
    <div class="h-1 w-full bg-gray-200 dark:bg-gray-700"></div>
    <ExperienceSection />
    <div class="h-1 w-full bg-gray-200 dark:bg-gray-700"></div>
    <InterestsSection />
    <div class="h-1 w-full bg-gray-200 dark:bg-gray-700"></div>
    <ContactSection ref="contactSection" />
  </div>
</template>
