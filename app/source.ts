import { map } from "@/.map";
import { createMDXSource, defaultSchemas } from "next-docs-mdx";
import { loader } from "next-docs-zeta/source";
import { PageTree } from "next-docs-zeta/server";
import { z } from "zod";

const frontmatterSchema = defaultSchemas.frontmatter.extend({
  updated: z
    .string()
    .or(z.date())
    .transform((value, context) => {
      try {
        return new Date(value);
      } catch {
        context.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid date" });
        return z.NEVER;
      }
    }),
  authors: z.array(z.string()),
});

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  baseUrl: "/",
  rootDir: "docs",
  source: createMDXSource(map, { schema: { frontmatter: frontmatterSchema } }),
});

const offTopic = ["/non-nextjs-questions", "/good-question", "/minimal-reproduction-repository"];
export const pageTree: PageTree.Root = {
  name: "Docs",
  children: [
    { type: "separator", name: "Discord-specific" },
    { type: "page", name: "Non-Next.js Questions", url: "/non-nextjs-questions" },
    { type: "page", name: "How to ask a good question", url: "/good-question" },
    {
      type: "page",
      name: "How to create a minimal reproduction repository",
      url: "/minimal-reproduction-repository",
    },
    { type: "separator", name: "Questions" },
    ...originalTree.children
      .filter(node => node.type !== "page" || !offTopic.includes(node.url))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ],
};
