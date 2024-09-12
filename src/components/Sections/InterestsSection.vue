<template>
    <div class="flex flex-col text-start text-5xl font-bold space-y-4 pt-12">
        <p class="text-3xl font-bold text-center">Interests</p>
        <div class="grid grid-cols-1 gap-8">
            <InterestCard title="Music"
                description="Writing, composing, and performing original songs in studio and on stage." ref="music">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/6j08Lj4qIAiY3ffKJahC5F?utm_source=generator"
                        width="100%" height="152" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                    <iframe style="border-radius:12px" class="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/gluurSc2OTw?si=uui_cxXDFYZUyudu"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/1xUTaxFKo0k7AnyqJVJfRj?utm_source=generator"
                        width="100%" height="152" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                    <iframe style="border-radius:12px" class="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/pmYHg6-8ocE?si=mkqpHKBwJlCQ6HLw"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/52EVj65gK8WIj9QuQ9PZmJ?utm_source=generator"
                        width="100%" height="152" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                    <iframe style="border-radius:12px" class="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/GLuaLl9oZJA?si=SeDw2U2OVo9f4saH"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </InterestCard>
            <InterestCard title="Sports"
                description="A healthy mind in a healthy body is essential. To maintain my well-being and stay in shape, I engage in various physical and sporting activities, such as outdoor walking, swimming, street workout, and going to the gym. I apply the same mindset in both web development and sports, particularly in the drive to push myself beyond my limits." />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAnimate, useIntersectionObserver } from '@vueuse/core';

const music = ref()

const { play: playMusic } = useAnimate(
    music,
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 1000, iterations: 1, easing: 'ease-in' }
);

onMounted(() => {
    useIntersectionObserver(music, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            playMusic();
        }
    });
});

</script>