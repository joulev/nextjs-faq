import { allDocs, allMeta } from "contentlayer/generated";
import { createContentlayer } from "next-docs-zeta/contentlayer";
import { PageTree } from "next-docs-zeta/server";

const offTopic = ["/non-nextjs-questions", "/good-question", "/minimal-reproduction-repository"];

const {
  tree: originalTree,
  getPage,
  getPageUrl,
} = createContentlayer(allMeta, allDocs, { baseUrl: "/" });
export { getPage, getPageUrl };

export const tree: PageTree = {
  name: "Docs",
  children: [
    { type: "separator", name: "About" },
    { type: "page", name: "About this site", url: "/" },
    { type: "separator", name: "Discord-specific" },
    { type: "page", name: "Non-Next.js Questions", url: "/non-nextjs-questions" },
    { type: "page", name: "How to ask a good question", url: "/good-question" },
    {
      type: "page",
      name: "How to create a minimal reproduction repository",
      url: "/minimal-reproduction-repository",
    },
    { type: "separator", name: "Questions" },
    ...originalTree.children.filter(node => node.type !== "page" || !offTopic.includes(node.url)),
  ],
};
