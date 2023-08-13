import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import { MDXContent } from "next-docs-ui/mdx";
import { DocsPage } from "next-docs-ui/page";
import { getTableOfContents } from "next-docs-zeta/server";
import { notFound } from "next/navigation";
import { Content } from "./content";

function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date); // 1 January 2021
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join("/");
  const page = allDocs.find(page => page.slug === path);

  if (page == null) {
    notFound();
  }

  const toc = await getTableOfContents(page.body.raw);

  return (
    <DocsPage
      toc={toc}
      tocContent={
        <>
          {toc.length > 0 && <hr style={{ margin: "24px 0px" }} />}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: "0.85rem",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            <div>Last updated: {formatDate(new Date(page.updated))}</div>
            <a
              href={`https://github.com/joulev/nextjs-discord-common-questions/blob/main/content/${page._raw.sourceFilePath}`}
            >
              Edit this Page &rarr;
            </a>
          </div>
        </>
      }
    >
      <MDXContent>
        <h1>{page.title}</h1>
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
  const path = params.slug.join("/");
  const page = allDocs.find(page => page.slug === path);

  if (page == null) return;

  return {
    title: page.title,
    description: page.description,
  } satisfies Metadata;
}

export const dynamicParams = false;
