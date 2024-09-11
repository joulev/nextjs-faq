import { defineDocs, frontmatterSchema, getDefaultMDXOptions } from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  docs: {
    dir: "./content",
    schema: frontmatterSchema.extend({
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
    }),
    mdxOptions: getDefaultMDXOptions({
      rehypeCodeOptions: {
        inline: "tailing-curly-colon",
        theme: "github-dark-default",
      },
    }),
  },
});
