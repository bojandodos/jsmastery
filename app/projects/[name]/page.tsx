import Link from "next/link";

export default async function JobName({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div>
      <h1 className="h1-bold">Project name: {name}</h1>
      <p>This is the Home page.</p>
      <Link href="/projects/list">Back toProjects</Link>
    </div>
  );
}
