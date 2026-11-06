import { defineCollection, z } from "astro:content";

const bulletins = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pdf: z.string().optional(),
  }),
});

export const collections = { bulletins };