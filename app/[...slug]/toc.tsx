/**
 * Taken from next-docs-ui source code; but we update it to enable `header`
 */
"use client";

import { TextIcon } from "lucide-react";
import * as Primitive from "next-docs-zeta/toc";
import { TOCItemType } from "next-docs-zeta/server";

import { cn } from "@/lib/cn";

function TOCItem({ item }: { item: TOCItemType }) {
  return (
    <Primitive.TOCItem
      href={item.url}
      item={item}
      className={cn(
        "nd-border-l-2 nd-text-sm nd-py-1 nd-text-muted-foreground nd-transition-colors nd-text-ellipsis nd-overflow-hidden data-[active=true]:nd-font-medium data-[active=true]:nd-text-primary data-[active=true]:nd-border-primary",
        item.depth === 1 && "nd-border-l-0",
        item.depth === 2 && "nd-pl-3",
        item.depth === 3 && "nd-pl-6",
        item.depth >= 4 && "nd-pl-9",
      )}
    >
      {item.title}
    </Primitive.TOCItem>
  );
}

function TOCItems({ items }: { items: TOCItemType[] }) {
  return (
    <Primitive.TOCProvider toc={items} className="nd-overflow-hidden py-4">
      <h3 className="nd-inline-flex nd-flex-row nd-items-center nd-font-medium nd-text-sm nd-mb-4">
        <TextIcon className="nd-inline nd-w-4 nd-h-4 nd-mr-2" /> On this page
      </h3>
      <div className="nd-flex nd-flex-col">
        {items.map((item, i) => (
          <TOCItem key={i} item={item} />
        ))}
      </div>
    </Primitive.TOCProvider>
  );
}

export function TOC(props: {
  items: TOCItemType[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="nd-relative nd-w-[250px] max-xl:nd-hidden">
      <div className="divide-y nd-sticky nd-flex nd-flex-col nd-top-16 nd-py-16 nd-max-h-[calc(100vh-4rem)]">
        {props.header}
        {props.items.length > 0 && <TOCItems items={props.items} />}
        {props.footer}
      </div>
    </div>
  );
}
