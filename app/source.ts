import { allDocs, allMeta } from "contentlayer/generated";
import { createContentlayer } from "next-docs-zeta/contentlayer";
import { PageTree } from "next-docs-zeta/server";

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
    { type: "page", name: "Write a Good Question", url: "/good-question" },
    { type: "separator", name: "Questions" },
    ...originalTree.children.filter(
      node => node.type !== "page" || node.url !== "/non-nextjs-questions" || node.url !== "/good-question",
    ),
  ],
};
