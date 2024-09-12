<template>
  <main class="flex-center flex-col h-screen">
    <div class="text-4xl i-carbon-warning inline-block mb-2" />
    <RouterView />
    <button class="btn text-sm mt-3" @click="$router.back()">
      {{ $t('button.back') }}
    </button>
  </main>
</template>
