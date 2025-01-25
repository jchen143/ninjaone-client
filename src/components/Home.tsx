import React from "react";

import Banner from "src/components/Banner";
import DeviceRibbon from "./DeviceRibbon/DeviceRibbon";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <DeviceRibbon />
    </div>
  );
};

export default Home;

