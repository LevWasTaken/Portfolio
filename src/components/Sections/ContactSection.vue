<template>
    <div class="flex flex-col text-center text-5xl font-bold space-y-4 pt-12" ref="contactSection">
        <p class="text-2xl font-bold text-decoration-purple-400">Contact Me</p>
        <div class="text-sm text-gray-700 dark:text-gray-200">
            <p>Email: <a href="mailto:boulliaux@et.intechinfo.fr"
                    class="underline hover:text-purple-400 transition-all">boulliaux@et.intechinfo.fr</a></p>
            <p>Phone: <a href="tel:+33764398477" class="underline hover:text-purple-400 transition-all">07 64 39 84
                    77</a></p>
            <p>Available for freelance or full-time opportunities</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contactSection = ref(null);
</script>
