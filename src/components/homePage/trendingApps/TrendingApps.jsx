import { Suspense } from "react";
import TrendingAppsData from "./TrendingAppsData";
import LoadingSkeleton from "./LoadingTrendingApps";
import Link from "next/link";

// Main Component
const TrendingApps = ({ from }) => {
  console.log(from, "from");

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section Header */}
      <div className="mb-8 text-center">
        {from === "allApps" ? (
          <h2 className={"font-bold text-4xl"}>All Apps</h2>
        ) : (
          <h2 className={"font-bold text-4xl"}>Trending Apps</h2>
        )}

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Suspense Loading */}
      <Suspense fallback={<LoadingSkeleton />}>
        <TrendingAppsData from={from} />
      </Suspense>

      <div className="text-center mt-4">
        {from === "allApps" ? (
          <Link href={"/"}>
            <button className="btn bg-purple-500 text-white">
              Back to home
            </button>
          </Link>
        ) : (
          <Link href={"/apps"}>
            <button className="btn bg-purple-500 text-white">View All</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TrendingApps;
