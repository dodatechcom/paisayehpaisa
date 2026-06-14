import { z, defineCollection } from 'astro:content';

const article = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  lastUpdated: z.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()),
  cover: z.object({
    image: z.string().optional(),
    alt: z.string().optional(),
  }).optional(),
  weight: z.number().optional(),
});

export const collections = {
  'crypto-basics': defineCollection({ type: 'content', schema: article }),
  'safe-crypto': defineCollection({ type: 'content', schema: article }),
  'crypto-scam': defineCollection({ type: 'content', schema: article }),
  'crypto-answers': defineCollection({ type: 'content', schema: article }),
  'crypto-tax': defineCollection({ type: 'content', schema: article }),
  'crypto-tools': defineCollection({ type: 'content', schema: article }),
};
