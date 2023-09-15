"use client";

import { HelpCircle } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import defaultComponents from "next-docs-ui/mdx";
import { SafeLink } from "next-docs-zeta/link";

import { useTitle } from "@/app/title-provider";

const components = {
  ...defaultComponents,
  Question: ({ id }: { id: string }) => {
    const title = useTitle(id);
    return (
      <>
        &nbsp;
        <span className="whitespace-nowrap">
          <HelpCircle size="18" className="inline-block text-daw-zinc-600 mr-1" />
          &nbsp;
        </span>
        <SafeLink href={`/${id}`}>{title}</SafeLink>
      </>
    );
  },
};

export function Content({ code }: { code: string }) {
  const MDX = useMDXComponent(code);

  return <MDX components={components} />;
}
