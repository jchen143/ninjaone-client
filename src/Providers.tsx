import React from "react";
import { RefreshProvider } from "src/providers/refreshProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <RefreshProvider>
      {children}
    </RefreshProvider>
  );
};

export default Providers;