<template>
    <div class="flex flex-col py-12 px-4 md:px-10 lg:px-24 transition-colors duration-300">
        <h1 class="text-3xl font-bold text-center">Experience</h1>

        <!-- Timeline Container -->
        <div class="relative">

            <!-- Timeline Item 1 -->
            <TimelineItem position="left" title="Fullstack Developer - The Walking Nerds"
                date="March 2022 - March 2024 (Paris - Digital Production Studio)"
                description="Developed dynamic web applications using Vue.js (3), Node.js, and TypeScript. Managed databases, handled backend and frontend, and created technical documentation."
                techStack="Vue.js (3), Node.js, TypeScript, Tailwind, GraphQL, AdonisJS, Vite.js, GitLab, Git, Bash"
                color="blue" />

            <!-- Timeline Item 2 -->
            <TimelineItem position="right" title="Software Developer - ONG Digital"
                date="September 2021 - February 2022 (Paris)"
                description="Developed an extranet dashboard and business applications. Maintained databases, and performed website updates."
                techStack="React.js, C#, AngularJS, PostgreSQL, WordPress" color="blue" />

            <!-- Other Timeline Items -->
            <TimelineItem position="left" title="Master's Degree in Software Engineering"
                date="March 2022 - March 2024, ESIEA - Ivry-sur-Seine"
                description="Graduated with the title of 'Expert in Software Engineering.' Completed projects involving compiler design, algorithms, and advanced project management."
                color="green" />

            <TimelineItem position="right" title="Bachelor's Degree in Software Engineering"
                date="March 2019 - March 2022, ESIEA - Ivry-sur-Seine"
                description="Graduated with the title of 'Application Developer.' Completed numerous projects in individual and group settings."
                color="green" />

            <TimelineItem position="left" title="Baccalauréat Scientifique - Engineering Science"
                date="June 2018, Lycée Voltaire - Paris" color="green" />
        </div>
    </div>
</template>
