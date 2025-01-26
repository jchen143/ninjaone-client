import React from "react"; 
import Modal from "src/base-components/Modal/Modal";
import { Device } from "src/types/types";
import EditDeviceForm from "src/components/DataTable/DevicesTable/EditDeviceForm";

interface DeviceItemProps {
  device: Device;
}

const DeviceRowItem: React.FC<DeviceItemProps> = (props) => {
  const { device } = props; 
  const [deviceOptionsOpen, setDeviceOptionsOpen] = React.useState(false); 
  const [deviceEditModalOpen, setDeviceEditModalOpen] = React.useState(false);

  const handleEdit = (id?: string) => {

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
      <Modal isOpen={deviceEditModalOpen} onClose={() => { setDeviceEditModalOpen(false) }} title="Edit Device">
        <EditDeviceForm closeForm={() => {setDeviceEditModalOpen(false)}} deviceId={device.id}/>
      </Modal>
    </div>
  )
}

export default DeviceRowItem;