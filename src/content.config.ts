import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bulletins = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bulletins" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pdf: z.string().optional(),
  }),
});

export const collections = { bulletins };