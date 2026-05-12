"use client";

import { installAppContext } from "@/context/InstallContext";
import { useContext } from "react";
import { toast } from "react-toastify";




const InstallToggleButton = ({ app }) => {
  const { setInstall, install } = useContext(installAppContext);

  // Check already installed
  const isExitsApp = install.find((a) => a.id == app.id);

  const handleInstall = (apps) => {
    if (isExitsApp) {
      toast.warning(`${apps.title} already added`);
      return;
    } else {
      setInstall([...install, apps]);
      toast.success(`${apps.title} added`);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button
        disabled={isExitsApp ? true : false}
        onClick={() => handleInstall(app)}
        className="btn btn-accent font-semibold text-xl"
      >
        {isExitsApp ? "Installed" : "Install"}
      </button>
    </div>
  );
};

export default InstallToggleButton;
