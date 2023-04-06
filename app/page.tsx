import { A } from "~/app/[id]/components";
import { getAllIds, getTitle } from "~/app/[id]/get-content";

export default async function Page() {
  const ids = getAllIds();
  const entries = await Promise.all(ids.map(async id => ({ id, title: await getTitle(id) })));
  return (
    <>
      <h1>Question list</h1>
      <div className="flex flex-col gap-4 not-prose text-lg">
        {entries.map(({ id, title }) => (
          <A
            key={id}
            href={`/${id}`}
            className="bg-daw-slate-100 px-6 py-4 rounded hover:bg-daw-slate-200 hover:text-daw-slate-950 transition"
          >
            {title}
          </A>
        ))}
      </div>
    </>
  );
}

export const metadata = {
  title: "Answers to Next.js Discord common questions",
};
