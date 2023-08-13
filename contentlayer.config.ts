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
      messageContent: {
        type: "string",
        description: "Deprecated probably. No need to care about this property",
        required: false,
      },
    },
  }),
);
