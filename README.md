# landing-master-site

This is simple administration panel for download, update, delete and create landing websites.
It works only with json files, so it is for proggrammer only.

User friendly UI is provided in admin panel which provides with every site.

The Project setup and building is the same as in default Vue3 vite config.
Initial template - is default vue3 vite config with my little additions  - [here](https://github.com/Dihlofos/vue-template)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
