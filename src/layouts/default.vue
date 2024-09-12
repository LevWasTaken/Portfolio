<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow px-4 py-4 md:py-10 text-center text-gray-700 dark:text-gray-200 relative md:px-20">
      <AudioWaveSVG class="absolute -left-5 top-30 z-negative" />
      <CircularIconSVG class="absolute -right-5 bottom-10 z-negative" />
      <!-- center the mic -->
      <MicrophoneSVG class="absolute -bottom-100 left-1/2 transform -translate-x-1/2 z-negative" />
      <Header />
      <RouterView />
    </main>
  </div>
</template>

<
