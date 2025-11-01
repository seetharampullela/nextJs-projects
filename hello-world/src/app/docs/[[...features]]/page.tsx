export default async function DocumentViewer({
  params,
}: {
  params: Promise<{ features: Array<string> }>;
}) {
  const { features } = await params;
  if (features && features.length === 2) {
    return (
      <h1>
        Viewing {features[0]} for concept {features[1]}
      </h1>
    );
  }
  return <h1>Viewing Documentation</h1>;
}
