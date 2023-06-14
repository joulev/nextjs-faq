import { Fragment } from "react";
import { getAllIds, getContent } from "~/app/get-content";
import formatDate from "~/app/format-date";
import { A } from "~/app/[id]/components";

async function getData(id: string) {
  const { title, updated } = await getContent(id);
  return { id, title, updated };
}

export default async function Page() {
  const ids = getAllIds();
  const entries = await Promise.all(ids.map(getData)).then(entries =>
    entries.sort((a, b) => a.title.localeCompare(b.title))
  );
  return (
    <>
      <h1 className="font-bold">Question list</h1>
      {entries.map(({ id, title, updated }) => (
        <Fragment key={id}>
          <hr />
          <div className="not-prose -my-12">
            <A href={`/${id}`} className="flex flex-col gap-2 py-8">
              <h3 className="text-lg font-medium">{title}</h3>
              <div className="text-sm text-daw-zinc-600">
                <time title={updated.toISOString()}>{formatDate(updated)}</time>
              </div>
            </A>
          </div>
        </Fragment>
      ))}
    </>
  );
}
