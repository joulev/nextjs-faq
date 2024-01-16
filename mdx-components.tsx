import type { MDXComponents } from "mdx/types";
import defaultComponents from "next-docs-ui/mdx/default";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    img: props => <img {...props} />,
    Question: ({ id }: { id: string }) => <Link href={`/${id}`}>this question</Link>,
  };
}
