"use client";

import { FileNode, PageTree } from "next-docs-zeta/server";
import { createContext, useContext } from "react";

const Context = createContext<PageTree | null>(null);

export function TitleProvider({ tree, children }: React.PropsWithChildren<{ tree: PageTree }>) {
  return <Context.Provider value={tree}>{children}</Context.Provider>;
}

export function useTitle(id: string) {
  const tree = useContext(Context);
  if (!tree) throw new Error("Missing title provider");
  const file = tree.children.find(
    (child): child is FileNode => child.type === "page" && child.url === `/${id}`,
  );
  if (!file) throw new Error(`Missing file for ${id}`);
  return file.name;
}
