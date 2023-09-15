import { makeSource } from "contentlayer/source-files";
import { createConfig } from "next-docs-zeta/contentlayer/configuration";
import { structure } from "next-docs-zeta/mdx-plugins";

export default makeSource(
  createConfig({
    docsComputedFields: {
      structuredData: {
        type: "json",
        resolve: page => structure(page.body.raw),
      },
    },
    docFields: {
      updated: {
        type: "date",
        description: "Last updated date of the post",
        required: true,
      },
      authors: {
        type: "list",
        of: { type: "string" },
        description: "The authors of the post (GitHub usernames list without the @)",
        required: true,
      },
    },
  }),
);
