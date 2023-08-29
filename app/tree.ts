import { allDocs, allMeta } from "contentlayer/generated";
import { buildPageTree, loadContext } from "next-docs-zeta/contentlayer";
import { TreeNode } from "next-docs-zeta/server";

const ctx = loadContext(allMeta, allDocs);

export const tree: TreeNode[] = [
  { type: "separator", name: "About" },
  { type: "page", name: "About this site", url: "/" },
  { type: "separator", name: "Discord-specific" },
  { type: "page", name: "Non-Next.js Questions", url: "/non-nextjs-questions" },
  { type: "separator", name: "Questions" },
  ...buildPageTree(ctx, { baseUrl: "/" }).filter(node => node.type !== "page" || node.url !== "/non-nextjs-questions"),
];
