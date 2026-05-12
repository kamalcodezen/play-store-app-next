// Loading Skeleton Component
const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-52 rounded-2xl bg-gray-300 animate-pulse" />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
