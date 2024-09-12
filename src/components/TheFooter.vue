<script setup lang="ts">
const { availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6">
    <button class="icon-btn mx-2 !outline-none" title="Toggle dark mode" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" title="Change locale" @click="toggleLocales()">
      <div i-carbon-language />
    </a>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://gitlab.walkingnerds.dev/twn/starters/vue-starter"
      target="_blank"
      title="GitHub"
    >
      <div class="i-ph-gitlab-logo" />
    </a>
  </nav>
</template>
