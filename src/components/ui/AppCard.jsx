import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
    // console.log(app,"apps dekh")
  return (
    <Link href={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
      <figure className="">
        <Image src={app.image} alt={app.title}
        width={200} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
            <FaDownload /> {app.downloads}
          </span>
          <span className="bg-orange-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
