<div align="center">
  <br/>
  <img width="250px" src="https://i.imgur.com/2QeRwqM.png">
  <br/>
  <br/>
</div>

# TWN's Vue Starter

Powerful Vue 3 starter template with TypeScript, Vite, Pinia, UnoCSS, and more.
Also pre-packed with some libraries and good practices.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)
- 🗂 [File based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)
- 📑 [Layout system](./src/layouts)
- 🧪 [Vue DevTools](https://github.com/webfansplz/vite-plugin-vue-devtools)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine
- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🌍 [I18n ready](./locales)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🦾 TypeScript, of course
- 🤖 End-to-end tests with [Playwright](https://playwright.dev/)
- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [`vite-plugin-vue-component-preview`](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview) - Preview single component in VSCode
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [`vite-plugin-vue-inspector`](https://github.com/webfansplz/vite-plugin-vue-inspector) - jump to local IDE source code while click the element of browser automatically
- [`vite-plugin-validate-env`](https://github.com/Julien-R44/vite-plugin-validate-env) - Allows you to validate your environment variables at build or dev time
- [`vite-plugin-visualizer`](https://github.com/KusStar/vite-bundle-visualizer/) - Visualize your bundle content with an interactive zoomable treemap

### Libraries

- [Day.js](https://day.js.org/) - Fast 2kB alternative to Moment.js with the same modern API
- [Ky](https://github.com/sindresorhus/ky) - Tiny and elegant HTTP client based on the browser Fetch API. 
  > Why `ky` over `fetch` or `axios` ? See [the FAQ](#why-ky-over-fetch-or-axios)
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [@twn/vue-use-auth](https://gitlab.walkingnerds.dev/twn/packages/vue-use-auth) - Authentication library for our projects
- [VueQuery](https://tanstack.com/query/v4/docs/vue/overview) - Tanstack's Vue Query library. **Please use this instead of Apollo Client or @vue/apollo-composable when you need to fetch data from GraphQL. See [the FAQ](#why-vuequery-over-apollo-client).**

### Coding Style

- Use Composition API with [`<script setup>`](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@twn/eslint-config](https://gitlab.walkingnerds.dev/twn/packages/eslint-config)

### Clone to local

```bash
git clone https://gitlab.walkingnerds.dev/twn/starters/vue-starter.git my-vue-app
cd my-vue-app
rm -rf .git
git init
pnpm i
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## FAQ

### Why ky over fetch or axios ?

#### ky vs fetch

Fetch is nice for simple use case but is way too verbose. Here's a comparison making the same call with Ky vs fetch :

```ts
import ky from 'ky'

const json = await ky.post('https://example.com', { json: { userName: "Test" } }).json();
console.log(json);
// => `{data: 'User saved'}`
```

```ts
// Fetch equivalent to the Ky call above
class HTTPError extends Error {}

const response = await fetch('https://example.com', {
  method: 'POST',
  body: JSON.stringify({ userName: "Test" }),
  headers: {
    'content-type': 'application/json'
  }
});

if (!response.ok) {
  throw new HTTPError(`Fetch error: ${response.statusText}`);
}

const json = await response.json();
console.log(json);
// => `{data: 'User saved'}`
```

#### ky vs axios
See https://twitter.com/sindresorhus/status/1037763588826398720

ky is also way smaller than axios. Ky : 9kb vs axios : 30kb.

Axios is still a great library especially if you need to have interceptors or other advanced features.

### Recommended VSCode extensions

- When using auto-imported components, you may want to install [goto-alias](https://github.com/antfu/vscode-goto-alias) to jump to the component definition instead of the `.d.ts` file.
