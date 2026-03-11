type Props = {
  schemas: Record<string, unknown>[];
};

export function MetaHead({ schemas }: Props) {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': schemas.map(({ '@context': _, ...rest }) => rest),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
