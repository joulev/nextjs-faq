import { A } from "~/app/[id]/components";
import "./globals.css";
import "./prism-theme.css";

const REPO = "https://github.com/joulev/nextjs-discord-common-questions";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-daw-zinc-950 bg-daw-zinc-50">
        <div className="px-8 py-16">
          <div className="prose prose-zinc dark:prose-invert mx-auto">
            {children}
            <hr />
            <div className="text-sm text-daw-zinc-600">
              <p>
                This website is a collection of my (<A href="https://github.com/joulev">@joulev</A>)
                answers to some of the most commonly asked questions on the{" "}
                <A href="https://discord.gg/nextjs">official Next.js server</A>. I found myself
                answering these questions over and over again so I decided why not make something so
                I can simply answer with a URL instead.
              </p>
              <p>
                The answers here are mine only and not affiliated with Vercel or the Next.js team.
                Since Next.js is evolving very fast, these answers might get outdated quickly. I try
                my best to keep them up to date but that is not always possible. If you find any
                errors or would like to make improvements, feel free to{" "}
                <A href={`${REPO}/issues`}>open an issue</A> or{" "}
                <A href={`${REPO}/pulls`}>make a pull request</A>.
              </p>
              <p>
                <A href={REPO}>The content and all source code of this app</A> are placed under{" "}
                <A href="http://wiki.creativecommons.org/CC0">CC0</A>. Attribution, though not
                required, is appreciated.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
