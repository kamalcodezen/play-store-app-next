import dataFetch from "@/data/data.json";
import AppCard from "@/components/ui/AppCard";

// Async Server Component
const TrendingAppsData = async ({ from }) => {
  // console.log(from, "from");

  // Fake loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // console.log(dataFetch,"check")
  return (
    <div className="grid grid-cols-3 gap-5">
      {dataFetch
        .slice(0, from === "homepage" ? 6 : dataFetch.length)
        .map((app, ind) => (
          <AppCard key={ind} app={app} />
        ))}
    </div>
  );
};

export default TrendingAppsData;
