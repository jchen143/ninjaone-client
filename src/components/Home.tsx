import React from "react";

import Banner from "src/components/Banner/Banner";
import DeviceRibbon from "./DeviceRibbon/DeviceRibbon";

// TODO: JUST FOR TESTING
// import { fetchDevices } from "src/util/devices-util";

const Home: React.FC = () => {

  //TODO: REMOVE AFTER TESTING
  // React.useEffect(() => {
  //   fetchDevices().then((devices) => {
  //     console.log("jochen",devices);
  //   });
  // }, []);

  return (
    <div className="home">
      <Banner />
      <DeviceRibbon />
    </div>
  );
};

export default Home;

