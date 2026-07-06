export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb } = await params;
  const name = suburb.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <h1 className="font-heading text-4xl">Event Styling in {name}</h1>
    </div>
  );
}
