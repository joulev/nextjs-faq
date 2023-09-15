import { makeSource } from "contentlayer/source-files";
import { createConfig } from "next-docs-zeta/contentlayer/configuration";

export default makeSource(
  createConfig({
    docFields: {
      updated: {
        type: "date",
        description: "Last updated date of the post",
        required: true,
      },
    },
  }),
);
