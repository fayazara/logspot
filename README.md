# Logspot

Logspot is a lightweight, free and open source template for your changelog made with Vue, Nuxt and Tailwindcss. 

![image](https://user-images.githubusercontent.com/15716057/215351682-9f1032a5-7b71-4e5c-be22-951df57198d4.png)

How it works?

1. Each `.md` file in `/content/posts/` counts as one changelog post, logspot uses the [nuxt content module](https://content.nuxtjs.org/)

### Features
1. Markdown support
2. Icons support using Iconify
3. Code syntax highlighting using Shiki.js
4. Frontmatter - dates, author supported
5. Vue components inside markdown using Nuxt contents MDC format - More on this [here](https://content.nuxtjs.org/guide/writing/mdc)
6. Icons support - `:icon{name="ph:user-circle-duotone"}` will show a user icon - find more icons at https://icones.js.org
7. Alert component with icon, title and description.

Format
```
::alert
---
icon: fluent:error-circle-24-regular
title: This is alert with default variant colors.
description: This will pick up colors from your primary color set in the tailwind config file. You can use this to show some kind of message to your users.
---
::
```
This above content will render a alert component, something like this
<img width="719" alt="Screenshot2023-01-30 at 01 17 36@2x" src="https://user-images.githubusercontent.com/15716057/215352019-66f4fb5f-1c2b-4ea0-a596-671aa9a99b51.png">
8. Widget page, Logspot also has a page specifically meant for widgets, here's an [example](https://logspot.vercel.app/test)


https://user-images.githubusercontent.com/15716057/215352102-7796a751-a18f-499b-8302-700092b739f1.mp4



## Setup Locally

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
