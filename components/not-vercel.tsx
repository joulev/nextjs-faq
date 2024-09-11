import Link from "fumadocs-core/link";

export function NotVercel() {
  return (
    <div className="bg-secondary/50 rounded-lg border border-border p-4 text-sm">
      This site is <strong>NOT</strong> an official Next.js or Vercel website.{" "}
      <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
        Learn more.
      </Link>
    </div>
  );
}
