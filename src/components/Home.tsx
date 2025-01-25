import React from "react";

import Banner from "src/components/Banner/Banner";
import DeviceRibbon from "./DeviceRibbon/DeviceRibbon";
import DataTable from "./DataTable/DataTable";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <DeviceRibbon />
      <DataTable />
    </div>
  );
};

export default Home;

