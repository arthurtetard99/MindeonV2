import { defineCollection, z } from 'astro:content';

const projets = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    client: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    results: z.array(z.string()).optional(),
    architectureType: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Mindeon.ai'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projets, articles };
