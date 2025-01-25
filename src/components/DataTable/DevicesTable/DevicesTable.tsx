import React from 'react';
import { Device } from 'src/util/devices-util';

interface DevicesTableProps {
  devices: Device[];
}

const DevicesTable: React.FC<DevicesTableProps> = (props) => {
  const { devices } = props;

  return (<div>{devices.map((device) => <div key={device.id}>{device.system_name} {device.type} {device.hdd_capacity}</div>)}</div>)
};

export default DevicesTable;
