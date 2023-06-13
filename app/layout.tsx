import { Metadata } from "next";
import { A } from "~/app/[id]/components";
import { Preload } from "~/app/preload";
import "./globals.css";
import "./prism-theme.css";

const REPO = "https://github.com/joulev/nextjs-discord-common-questions";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-daw-zinc-950 bg-daw-zinc-50 font-sans">
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
      <Preload />
    </html>
  );
}

const title = "Answers to Next.js Discord common questions";
const description =
  "@joulev's answers to some of the most commonly asked questions on the official Next.js server";
const url = "https://nextjs-discord-common-questions.joulev.dev";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  icons: {
    icon: [
      { url: "https://static.joulev.dev/images/favicon.svg", type: "image/svg+xml" },
      { url: "https://static.joulev.dev/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [{ url: "https://static.joulev.dev/images/apple-touch-icon.png", sizes: "180x180" }],
  },
};
