// "use client"

import logoImg from "@/assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  //   console.log({ navItems }, "navItem");
  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-[8px] container mx-auto">
        <Image src={logoImg} alt="" width={30} height={30} />
        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            <MyNavLink
              key={index}
              href={item.path}
              text={item.text}
            ></MyNavLink>
          ))}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
