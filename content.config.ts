import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    changelog: defineCollection({
      type: 'page',
      source: 'changelog/**/*.md',
      schema: z.object({
        title: z.string(),
        icon: z.string().optional(),
        description: z.string().optional(),
        authors: z
          .array(
            z.object({
              name: z.string(),
              avatar: z.string().url().optional(),
            })
          )
          .optional(),
        date: z.coerce.date(),
      })
    })
  }
})
