import Banner from "@/components/homePage/Banner";
import Stats from "@/components/homePage/Stats";
import TrendingApps from "@/components/homePage/trendingApps/TrendingApps";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <TrendingApps />
    </div>
  );
}
