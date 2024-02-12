"use client";

import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
import { useState, type HTMLAttributes, type ReactNode } from "react";

export function Files({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className="not-prose rounded-md border bg-card p-2" {...props}>
      {props.children}
    </div>
  );
}

export interface FileProps {
  title: string;
  icon?: ReactNode;
}

export interface FolderProps {
  title: string;

  /**
   * Open folder by default
   */
  defaultOpen?: boolean;

  /**
   * children files of the folder, considered as file if empty
   */
  children: ReactNode;
}

export function File(props: FileProps): JSX.Element {
  return (
    <p className="flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground [&_svg]:size-4">
      {props.icon ?? <FileIcon />}
      {props.title}
    </p>
  );
}

export function Folder({ title, defaultOpen = true, children }: FolderProps): JSX.Element {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        data-open={open}
        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground [&_svg]:size-4"
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <FolderOpenIcon /> : <FolderIcon />}
        {title}
      </button>
      <div className={open ? "ml-2 flex flex-col border-l pl-2" : "hidden"}>{children}</div>
    </div>
  );
}
