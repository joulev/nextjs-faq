import Balancer from "react-wrap-balancer";
import { A } from "~/app/[id]/components";
import { getContent } from "~/app/[id]/get-content";
import ShareButton from "~/app/[id]/share-button";

const REPO = "https://github.com/joulev/nextjs-discord-common-questions";

function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date); // 1 January 2021
}

export default async function Content({ id }: { id: string }) {
  const { content, title, updated } = await getContent(id);
  return (
    <div className="prose prose-slate dark:prose-invert mx-auto">
      <h1>
        <Balancer>{title}</Balancer>
      </h1>
      <div className="flex flex-row justify-between items-center not-prose text-sm text-slate-600 dark:text-slate-400">
        <div>
          <span className="hidden sm:inline">Last updated:</span>{" "}
          <time title={updated.toISOString()}>{formatDate(updated)}</time>
        </div>
        <ShareButton />
      </div>
      <hr />
      {content}
      <hr />
      <div className="text-sm text-slate-600 dark:text-slate-400">
        <p>
          This website is a colletion of my (<A href="https://github.com/joulev">@joulev</A>)
          answers to some of the most commonly asked questions on the{" "}
          <A href="https://discord.gg/nextjs">official Next.js server</A>. I found myself answering
          these questions over and over again so I decided why not make something so I can simply
          answer with a URL instead.
        </p>
        <p>
          The answers here are mine only and not affiliated with Vercel or the Next.js team. Since
          Next.js is evolving very fast, these answers might get outdated quickly. I try my best to
          keep them up to date but that is not always possible. If you find any errors or would like
          to make improvements, feel free to <A href={`${REPO}/issues`}>open an issue</A> or{" "}
          <A href={`${REPO}/pulls`}>make a pull request</A>.
        </p>
      </div>
    </div>
  );
}
