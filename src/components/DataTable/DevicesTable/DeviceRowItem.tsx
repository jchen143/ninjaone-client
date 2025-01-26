import React from "react"; 
import { Device } from "src/types/types";

interface DeviceItemProps {
  device: Device;
}

const DeviceRowItem: React.FC<DeviceItemProps> = (props) => {
  const { device } = props; 
  const [deviceOptionsOpen, setDeviceOptionsOpen] = React.useState(false); 

  const handleEdit = async (id?: string) => {

  }

  const editAndDelete = (
    <>
      <button onClick={(e) => handleEdit(device.id)}>Edit</button>
      <button>Delete</button>
    </>
  )

  return(
    <div className="device-row-item">
      <div key={device.id}>{device.system_name} {device.type} {device.hdd_capacity}</div>
      <button onClick={(e) => setDeviceOptionsOpen(!deviceOptionsOpen)}></button>
      {deviceOptionsOpen && editAndDelete}
    </div>
  )
}

export default DeviceRowItem;