export function SectionSkeleton() {
  return (
    <div className="w-full py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-1/3 animate-pulse rounded bg-gray-200 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
}
