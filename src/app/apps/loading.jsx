const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Banner Skeleton */}
      <div className="w-full h-[250px] rounded-3xl bg-gray-200 animate-pulse mb-10" />

      {/* Title Skeleton */}
      <div className="space-y-3 mb-8">
        <div className="w-52 h-8 rounded-lg bg-gray-200 animate-pulse" />
        <div className="w-80 h-4 rounded-lg bg-gray-200 animate-pulse" />
      </div>

      {/* Product Card Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-3xl p-4 shadow-sm bg-white"
          >
            {/* Image */}
            <div className="h-48 rounded-2xl bg-gray-200 animate-pulse mb-4" />

            {/* Title */}
            <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse mb-3" />

            {/* Subtitle */}
            <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse mb-4" />

            {/* Price */}
            <div className="h-6 w-24 rounded bg-gray-200 animate-pulse mb-4" />

            {/* Button */}
            <div className="h-10 rounded-xl bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
