import dataFetch from "@/data/data.json";
import AppCard from "@/components/ui/AppCard";

// Async Server Component
const TrendingAppsData = async () => {
  // Fake loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-3 gap-5">
      {dataFetch.slice(0, 9).map((app, ind) => (
        <AppCard key={ind} app={app} />
      ))}
    </div>
  );
};

export default TrendingAppsData;
