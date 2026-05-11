import Link from "next/link";
// import { HashLoader } from "react-spinners";
import dataFetch from "@/data/data.json";
import AppCard from "@/components/ui/AppCard";

const TrendingApps = () => {
  //   console.log(dataFetch);

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {/* {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : ( */}
      {/* <div className="grid grid-cols-3 gap-5">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )} */}

      <div className="grid grid-cols-3 gap-5">
        {dataFetch.slice(0, 9).map((app, ind) => {
          return <AppCard app={app} key={ind} />;
        })}
      </div>

      <div className="text-center mt-4">
        <Link href={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
