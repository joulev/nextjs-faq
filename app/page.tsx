import { redirect } from "next/navigation";
import { getAllIds } from "~/app/[id]/get-content";

export default function Page() {
  const ids = getAllIds();
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  redirect(`/${randomId}`);
}

export const dynamic = "force-dynamic";
