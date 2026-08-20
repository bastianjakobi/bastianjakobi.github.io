import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'de']),
    order: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
    projectUrl: z.url().optional(),
    codeUrl: z.url().optional(),
    annotation: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'de']).default('en'),
  }),
});

export const collections = { projects, blog };
