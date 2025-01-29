import React from 'react';

// using a refresh context so that maybe we can refresh when any of the actions are taken. 
// I'm making an assumption that we don't want to refresh when any action is taken because of the presence of the refresh button. 

interface RefreshContextType {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const refreshContext = React.createContext<RefreshContextType>({} as RefreshContextType);

interface RefreshProviderProps {
  children: React.ReactNode;
}

const RefreshProvider: React.FC<RefreshProviderProps> = ({ children }) => {
  const [refresh, setRefresh] = React.useState(true);

  return (
    <refreshContext.Provider value={{refresh, setRefresh}}>
      {children}
    </refreshContext.Provider>
  );
};



export { RefreshProvider, refreshContext };