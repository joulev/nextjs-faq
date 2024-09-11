import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PenLine } from "lucide-react";
import { NotVercel } from "@/components/not-vercel";
import { CopyButton } from "./copy-button";

function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date); // 1 January 2021
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const page = getPage(params.slug);

  if (!page) notFound();

  const updated = new Date(page.data.updated);
  const [updatedISO, updatedHuman] = [updated.toISOString(), formatDate(updated)];

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        single: false,
        style: "clerk",
        header: (
          <div className="flex flex-col gap-6 mb-6">
            <NotVercel />
            <div className="grid grid-cols-3 text-sm gap-y-4 text-muted-foreground">
              <div>Updated:</div>
              <time dateTime={updatedISO} title={updatedISO} className="col-span-2 text-foreground">
                {updatedHuman}
              </time>
              <div>Author{page.data.authors.length > 1 ? "s" : ""}:</div>
              <div className="col-span-2 flex flex-col gap-2">
                {page.data.authors.map(author => (
                  <Link
                    key={author}
                    href={`https://github.com/${author}`}
                    className="text-foreground transition-colors flex flex-row items-center gap-2 group"
                  >
                    <img
                      src={`https://github.com/${author}.png?size=16`}
                      className="w-4 h-4 rounded-full border border-background group-hover:border-muted-foreground transition-colors"
                    />
                    <span className="flex-grow truncate">{author}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ),
        footer: (
          <div className="flex flex-col gap-2 justify-start text-sm text-muted-foreground mt-6">
            <Link
              className="hover:text-foreground transition-colors"
              href={`https://github.com/joulev/nextjs-faq/blob/main/content${page.url}.mdx`}
            >
              <PenLine className="inline size-4 mr-2" />
              Edit this page
            </Link>
            <div>
              <CopyButton className="hover:text-foreground transition-colors" />
            </div>
          </div>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <div className="lg:hidden flex flex-row text-sm text-muted-foreground divide-x">
          <time dateTime={updatedISO} title={updatedISO} className="pr-4">
            {updatedHuman}
          </time>
          <div className="pl-4">
            <CopyButton className="hover:text-foreground transition-colors" />
          </div>
        </div>
        <MDX components={defaultMdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return getPages().map(page => ({ slug: page.slugs }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }): Metadata {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export const dynamicParams = false;
