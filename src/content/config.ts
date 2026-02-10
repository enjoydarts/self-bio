import { defineCollection, z } from 'astro:content';

// Profile Collection
const profileCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    location: z.string(),
    url: z.string().url(),
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
  type: 'data',
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    displayUrl: z.string(),
    icon: z.string(),
    rel: z.string().optional(),
  }),
});

// Services Collection
const servicesCollection = defineCollection({
  type: 'data',
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
  type: 'data',
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
