<template>
    <div class="grid grid-cols-3 gap-1 space-y-4">
        <div class="col-span-3 text-5xl font-bold text-center pb-6">
            <p class="text-3xl font-bold text-center">Skills</p>
        </div>
        <SkillCard icon="i-mdi-vuejs" color="green" title="Vue.js" :years=4
            description="I have worked on several Vue.js projects, creating dynamic, responsive interfaces with Vue Router, Vuex, and Vite." />
        <SkillCard icon="i-mdi-nodejs" color="yellow" title="Node.js" :years=5
            description="I have experience building REST APIs and GraphQL servers with Express, Fastify, and AdonisJS." />
        <SkillCard icon="i-mdi-language-typescript" color="blue" title="TypeScript" :years=3
            description="I have been using TypeScript for the past 3 years, writing type-safe code for Vue.js, Node.js, and React projects." />
        <SkillCard icon="i-mdi-graphql" color="indigo" title="GraphQL" :years=2
            description="I worked 2 years on Database on Hasura with Apollo and Tanstack, creating and consuming GraphQL APIs." />
        <SkillCard icon="i-mdi-git" color="red" title="Git" :years=6
            description="I have been using Git for the past 6 years, collaborating on projects with GitHub and GitLab." />

        <SkillCard icon=" i-mdi-docker" color="blue" title="Docker"
            description="I have experience containerizing applications with Docker, creating Dockerfiles and Docker Compose configurations."
            :years=2 />
        <SkillCard icon="i-mdi-language-python" color="blue" title="Python" :years=3
            description="I have experience with Python, creating scripts, web scrapers, and data analysis tools." />
        <SkillCard icon="i-mdi-database" color="gray" title="SQL" :years=5
            description="I have experience with SQL databases, writing queries, and designing schemas for MySQL, PostgreSQL, and SQLite." />
        <SkillCard icon="i-mdi-tailwind" color="orange" title="Tailwind" :years=3
            description="I have been using Tailwind CSS for the past 3 years, creating responsive layouts and custom designs." />
    </div>
</template>