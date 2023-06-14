import { ArrowLeft } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { getAllIds, getTitle, getContent } from "~/app/get-content";
import formatDate from "~/app/format-date";
import { A } from "~/app/[id]/components";
import ShareButton from "~/app/[id]/share-button";

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title, updated } = await getContent(params.id);
  return (
    <>
      <div className="not-prose">
        <A
          href="/"
          className="text-daw-zinc-600 text-sm inline-flex flex-row gap-2 justify-center items-center"
        >
          <ArrowLeft size="18" /> Back to question list
        </A>
      </div>
      <h1 className="my-8 font-bold">
        <Balancer>{title}</Balancer>
      </h1>
      <div className="flex flex-row justify-between items-center not-prose text-sm text-daw-zinc-600">
        <div>
          <span className="hidden sm:inline">Last updated:</span>{" "}
          <time title={updated.toISOString()}>{formatDate(updated)}</time>
        </div>
        <ShareButton />
      </div>
      <hr />
      {content}
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return { title: await getTitle(params.id) };
}

export function generateStaticParams() {
  return getAllIds().map(id => ({ id }));
}

export const dynamicParams = false;
