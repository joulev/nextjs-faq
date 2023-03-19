import { readdirSync, readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { join } from "path";
import * as components from "~/app/[id]/components";

export const DIR = join(process.cwd(), "contents");

export function getAllIds() {
  return readdirSync(DIR, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith(".mdx"))
    .map(file => file.name.replace(/\.mdx$/, ""));
}

export async function getTitle(id: string) {
  return await getContent(id).then(({ title }) => title);
}

export async function getContent(id: string) {
  const source = readFileSync(join(DIR, `${id}.mdx`), "utf8");
  const { content, frontmatter } = await compileMDX<{ title: string; updated: Date }>({
    source,
    options: { parseFrontmatter: true },
    components,
  });
  return { content, ...frontmatter };
}
