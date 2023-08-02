import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { getHighlighter } from "shiki";
import { getTitle } from "~/app/get-content";

export function A({ href, ...rest }: React.ComponentProps<"a">) {
  if (href && href.startsWith("/")) return <Link {...rest} href={href} ref={undefined} />;
  return <a {...rest} href={href} target="_blank" rel="noopener noreferrer" />;
}
export const a = A;

export function pre({ children }: React.ComponentProps<"pre">) {
  return <>{children}</>;
}

async function __code({ children, ...rest }: React.ComponentProps<"code">) {
  const language = rest.className?.replace(/language-/, "");
  if (!language || !children) return <code {...rest}>{children}</code>;
  const highlighter = await getHighlighter({
    theme: "one-dark-pro",
    langs: ["json", "json5", "js", "jsx", "ts", "tsx"],
  });
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlighter.codeToHtml(String(children), { lang: language }),
      }}
    />
  );
}
export const code = __code as unknown as (props: React.ComponentProps<"code">) => JSX.Element;

async function __Question({ id }: { id: string }) {
  const title = await getTitle(id);
  // We need to ensure the help-circle stays on the same line as the link, while
  // the underline is displayed nicely, the spacing are good and if the help-circle
  // is at the start of a line, it aligns well with the left margin of the whole
  // text. See also https://stackoverflow.com/a/75070847
  return (
    <>
      &nbsp;
      <span className="whitespace-nowrap">
        <HelpCircle size="18" className="inline-block text-daw-zinc-600 mr-1" />
        &nbsp;
      </span>
      <A href={`/${id}`}>{title}</A>
    </>
  );
}
export const Question = __Question as unknown as ({ id }: { id: string }) => JSX.Element;
