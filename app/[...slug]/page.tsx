import { allDocs } from "contentlayer/generated";
import { PenLine } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "next-docs-ui/mdx";
import { SafeLink } from "next-docs-zeta/link";
import { DocsPage } from "next-docs-ui/page";
import { findNeighbour, getTableOfContents } from "next-docs-zeta/server";

import { getPage, getPageUrl, tree } from "@/app/source";

import { Content } from "./content";
import { CopyButton } from "./copy-button";

function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date); // 1 January 2021
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const toc = await getTableOfContents(page.body.raw);
  const neighbour = findNeighbour(tree, getPageUrl(params.slug));
  const updated = new Date(page.updated);
  const [updatedISO, updatedHuman] = [updated.toISOString(), formatDate(updated)];

  return (
    <DocsPage
      toc={toc}
      footer={neighbour}
      tableOfContent={{
        header: (
          <div className="grid grid-cols-3 text-sm gap-y-4 text-muted-foreground">
            <div>Updated:</div>
            <time dateTime={updatedISO} title={updatedISO} className="col-span-2 text-foreground">
              {updatedHuman}
            </time>
            <div>Author{page.authors.length > 1 ? "s" : ""}:</div>
            <div className="col-span-2 flex flex-col gap-2">
              {page.authors.map(author => (
                <SafeLink
                  key={author}
                  href={`https://github.com/${author}`}
                  className="text-foreground transition-colors flex flex-row items-center gap-2 group"
                >
                  <img
                    src={`https://github.com/${author}.png?size=16`}
                    className="w-4 h-4 rounded-full border border-background group-hover:border-muted-foreground transition-colors"
                  />
                  <span className="flex-grow truncate">{author}</span>
                </SafeLink>
              ))}
            </div>
          </div>
        ),
        footer: (
          <div className="flex flex-col gap-2 justify-start text-sm text-muted-foreground">
            <SafeLink
              className="hover:text-foreground transition-colors"
              href={`https://github.com/joulev/nextjs-faq/blob/main/content/${page._raw.sourceFilePath}`}
            >
              <PenLine className="nd-inline nd-w-4 nd-h-4 nd-mr-2" />
              Edit this page
            </SafeLink>
            <div>
              <CopyButton className="hover:text-foreground transition-colors" />
            </div>
          </div>
        ),
      }}
    >
      <MDXContent>
        <h1>{page.title}</h1>
        <div className="xl:hidden flex flex-row text-sm text-muted-foreground divide-x">
          <time dateTime={updatedISO} title={updatedISO} className="pr-4">
            {updatedHuman}
          </time>
          <div className="pl-4">
            <CopyButton className="hover:text-foreground transition-colors" />
          </div>
        </div>
        <Content code={page.body.code} />
      </MDXContent>
    </DocsPage>
  );
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allDocs.map(page => ({
    slug: page.slug.split("/"),
  }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) return {};

  return {
    title: page.title,
    description: page.description,
  } satisfies Metadata;
}
