import React from 'react';

import { Device } from 'src/types/types';
import DeviceRowItem from "src/components/DataTable/DevicesTable/DeviceRowItem";

interface DevicesTableProps {
  devices: Device[];
}

const DevicesTable: React.FC<DevicesTableProps> = (props) => {
  const { devices } = props;

  return (
    <div className="device-table">
      {devices.map((device) => <DeviceRowItem device={device} key={device.id} />)}
    </div>
  )
};

export default DevicesTable;
