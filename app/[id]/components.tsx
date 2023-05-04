import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import { getTitle } from "~/app/get-content";

export function A({ href, ...rest }: React.ComponentProps<"a">) {
  if (href && href.startsWith("/")) return <Link {...rest} href={href} ref={undefined} />;
  return <a {...rest} href={href} target="_blank" rel="noopener noreferrer" />;
}
export const a = A;

export function code({ children, ...rest }: React.ComponentProps<"code">) {
  const language = rest.className?.replace(/language-/, "");
  if (!language || !children) return <code {...rest}>{children}</code>;
  const rendered = highlight(String(children), languages[language], language);
  return <code {...rest} dangerouslySetInnerHTML={{ __html: rendered }} />;
}

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
