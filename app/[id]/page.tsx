import Content from "~/app/[id]/content";
import { getAllIds, getTitle } from "~/app/[id]/get-content";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="px-8 py-16">
      {/* @ts-expect-error */}
      <Content id={params.id} />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return { title: await getTitle(params.id) };
}

export function generateStaticParams() {
  return getAllIds().map(id => ({ id }));
}

export const dynamicParams = false;
