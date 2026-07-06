export default async function HireItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <h1 className="font-heading text-4xl">Hire Item: {slug}</h1>
    </div>
  );
}
