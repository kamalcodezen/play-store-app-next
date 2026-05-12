"use client";

import { installAppContext } from "@/context/InstallContext";
import Image from "next/image";
import { useContext } from "react";

const InstallApp = () => {
  const { setInstall, install } = useContext(installAppContext);

  const handleUninstall = (app) => {
    const exitsApp = install.filter((a) => a.id !== app.id);
    setInstall(exitsApp);
  };

  return (
    <div className="container mx-auto my-10">
      {install.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
          No installed apps found!
        </h2>
      ) : (
        install.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div>
                <Image
                  src={app.image}
                  width={200}
                  height={200}
                  className="h-[120px] w-auto"
                  alt=""
                />
                <h2 className="font-semibold text-2xl">{app.title}</h2>
              </div>
              <button
                className="btn bg-secondary text-white"
                onClick={() => handleUninstall(app)}
              >
                Uninstall
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApp;
