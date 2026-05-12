"use client"

import InstallContextProvider from "@/context/InstallContext";
const Providers = ({ children }) => {
    return (
        <div>
            <InstallContextProvider>{children}</InstallContextProvider>
        </div>
    );
};

export default Providers;