<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <!-- Contenu principal -->
    <div class="flex justify-between z-10">
        <div class="text-2xl font-bold">Arthur Boulliaux</div>
        <div class="flex space-x-1">
            <div v-if="isDark" class="i-mdi-white-balance-sunny text-3xl" @click="toggleDark()" />
            <div v-else class="i-mdi-moon-waning-crescent text-3xl" @click="toggleDark()" />
            <a class="i-mdi-github text-grey-400 text-3xl" href="https://github.com/LevWasTaken/" />
            <a class="i-mdi-linkedin text-blue-600 text-3xl" href="https://www.linkedin.com/in/arthur-boulliaux/" />
            <a class="i-mdi-instagram text-purple-400 text-3xl" href="https://www.instagram.com/levrailev/" />
        </div>
    </div>
</template>
