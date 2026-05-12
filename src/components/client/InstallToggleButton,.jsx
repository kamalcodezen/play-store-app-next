"use client";

import { installAppContext } from "@/context/InstallContext";
import { useContext } from "react";

const InstallToggleButton = ({ app }) => {
  const { setInstall, install } = useContext(installAppContext);
    console.log(install, "button");

  const handleInstall = (apps) => {
    setInstall([...install, apps]);
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => handleInstall(app)}
        className="btn btn-accent font-semibold text-xl"
      >
        Install
      </button>
    </div>
  );
};

export default InstallToggleButton;
