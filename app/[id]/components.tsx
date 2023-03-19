import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { getTitle } from "~/app/[id]/get-content";

export function A(props: React.ComponentProps<"a">) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}
export const a = A;

async function __Question({ id }: { id: string }) {
  const title = await getTitle(id);
  return (
    <>
      <HelpCircle size="18" className="inline-block text-slate-600 dark:text-slate-400 mx-1" />
      <Link href={`/${id}`}>{title}</Link>
    </>
  );
}
export const Question = __Question as unknown as React.FC<{ id: string }>;
