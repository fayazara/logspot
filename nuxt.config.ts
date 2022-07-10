import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    content: {
        highlight: {
            theme: 'nord',
            preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue', 'python', 'ruby', 'java'],
        }
    }
})
