"use client";

import { installAppContext } from "@/context/InstallContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({ app }) => {
  const { setInstall, install } = useContext(installAppContext);
  // console.log(install, "button");

  const handleInstall = (apps) => {
    const isExitsApp = install.find((a) => a.id == apps.id);
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
        onClick={() => handleInstall(app)}
        className="btn btn-accent font-semibold text-xl"
      >
        Install
      </button>
    </div>
  );
};

export default InstallToggleButton;
