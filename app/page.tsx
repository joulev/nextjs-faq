import { Metadata } from "next";
import { Link, MDXContent } from "next-docs-ui/mdx";
import { DocsPage } from "next-docs-ui/page";

const REPO = "https://github.com/joulev/nextjs-faq";

export default function Home() {
  return (
    <DocsPage>
      <MDXContent>
        <p>
          I am <Link href="https://github.com/joulev">@joulev</Link>, a Next.js user, an active
          helper and moderator on the{" "}
          <Link href="https://discord.gg/nextjs">official Next.js server</Link>.
        </p>
        <p>
          This website is a collection of the answers that some active server members and I have for
          some of the most commonly asked questions on the server. I found myself answering these
          questions over and over again so I decided why not make something so I can simply answer
          with a URL instead.
        </p>
        <p>
          The answers here are <strong>not affiliated with Vercel or the Next.js team</strong>.
          Since Next.js is evolving very fast, these answers might get outdated quickly. I try my
          best to keep them up to date but that is not always possible. If you find any errors or
          would like to make improvements, feel free to{" "}
          <Link href={`${REPO}/issues`}>open an issue</Link> or{" "}
          <Link href={`${REPO}/pulls`}>make a pull request</Link>.
        </p>
        <p>
          <Link href={REPO}>The content and all source code of this app</Link> are placed under{" "}
          <Link href="http://wiki.creativecommons.org/CC0">CC0</Link>. Attribution, though not
          required, is appreciated.
        </p>
        <p>
          Built with <Link href="https://github.com/SonMooSans/next-docs">next-docs</Link>.
        </p>
      </MDXContent>
    </DocsPage>
  );
}

export const metadata: Metadata = {
  title: "Answers to Next.js Discord common questions",
};
