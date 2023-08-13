"use client";

import { HelpCircle } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Card, Cards, Heading, Image, Link, Pre, Table } from "next-docs-ui/mdx";

const components = {
  Card,
  Cards,
  a: Link,
  pre: Pre,
  img: Image,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h4" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h5" {...props} />,
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h6" {...props} />,
  table: Table,
  Question: ({ id }: { id: string }) => (
    <>
      &nbsp;
      <span style={{ whiteSpace: "nowrap" }}>
        <HelpCircle size="18" style={{ display: "inline-block", marginRight: 4 }} />
        &nbsp;
      </span>
      <Link href={`/${id}`}>this post</Link>
    </>
  ),
};

export function Content({ code }: { code: string }) {
  const MDX = useMDXComponent(code);

  return <MDX components={components} />;
}
