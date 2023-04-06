import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { getTitle } from "~/app/[id]/get-content";

export function A({ href, ...rest }: React.ComponentProps<"a">) {
  if (href && href.startsWith("/")) return <Link {...rest} href={href} ref={undefined} />;
  return <a {...rest} href={href} target="_blank" rel="noopener noreferrer" />;
}
export const a = A;

async function __Question({ id }: { id: string }) {
  const title = await getTitle(id);
  return (
    <>
      <HelpCircle size="18" className="inline-block text-daw-slate-600 mx-1" />
      <A href={`/${id}`}>{title}</A>
    </>
  );
}
export const Question = __Question as unknown as React.FC<{ id: string }>;
