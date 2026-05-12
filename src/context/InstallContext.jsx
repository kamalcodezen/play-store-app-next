import { createContext, useState } from "react";

export const installAppContext = createContext();

const InstallContextProvider = ({ children }) => {
  const [install, setInstall] = useState([]);
  
  const data = {
    install,
    setInstall,
  };

  return (
    <div>
      <installAppContext.Provider value={data}>
        {children}
      </installAppContext.Provider>
    </div>
  );
};

export default InstallContextProvider;
