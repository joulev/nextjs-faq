import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Question: ({ id }: { id: string }) => <Link href={`/${id}`}>this question</Link>,
  };
}
