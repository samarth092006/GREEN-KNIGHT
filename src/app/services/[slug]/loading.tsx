export default function Loading() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 animate-pulse space-y-8">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-48 bg-gray-200 rounded" />

      {/* Hero Skeleton */}
      <div className="h-80 rounded-3xl bg-gray-200" />

      {/* Content Skeleton */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-40 rounded-2xl bg-gray-200" />
          <div className="h-60 rounded-2xl bg-gray-200" />
        </div>
        <div className="h-96 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
