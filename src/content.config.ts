import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Profile Collection
const profileCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    location: z.string(),
    url: z.url(),
    ogImage: z.string(),
    avatar: z.string(),
    status: z.object({
      available: z.boolean(),
      text: z.string(),
    }),
    bio: z.object({
      ja: z.array(z.string()),
      en: z.array(z.string()),
    }),
    github: z.object({
      repo: z.string(),
      branch: z.string(),
    }),
  }),
});

// Links Collection
const linksCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/links' }),
  schema: z.object({
    name: z.string(),
    url: z.url(),
    displayUrl: z.string(),
    icon: z.string(),
    rel: z.string().optional(),
  }),
});

// Services Collection
const servicesCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      ja: z.string(),
    }),
    items: z.array(
      z.object({
        en: z.string(),
        ja: z.string(),
      })
    ),
  }),
});

// Tech Stack Collection
const techStackCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/tech-stack' }),
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        displayName: z.string(),
        icon: z.object({
          type: z.enum(['simpleicons', 'skillicons', 'text', 'more']),
          value: z.string().optional(),
          color: z.string().optional(),
        }),
        title: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  profile: profileCollection,
  links: linksCollection,
  services: servicesCollection,
  'tech-stack': techStackCollection,
};
