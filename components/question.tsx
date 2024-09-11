import { getPage } from "@/app/source";
import Link from "fumadocs-core/link";
import { HelpCircle } from "lucide-react";

export function Question({ id }: { id: string }) {
  const page = getPage([id]);
  if (!page) return <span className="text-red-500">Unknown page</span>;
  return (
    <>
      &nbsp;
      <span className="whitespace-nowrap">
        <HelpCircle size="18" className="inline-block mr-0.5" />
        &nbsp;
      </span>
      <Link href={`/${id}`}>{page.data.title}</Link>
    </>
  );
}
