import React from "react"; 
import Modal from "src/base-components/Modal/Modal";
import { Device } from "src/types/types";
import EditDeviceForm from "src/components/DataTable/DevicesTable/EditDeviceForm";
import DeleteDeviceForm from "src/components/DataTable/DevicesTable/DeleteDeviceForm";

interface DeviceItemProps {
  device: Device;
}

const DeviceRowItem: React.FC<DeviceItemProps> = (props) => {
  const { device } = props; 
  const [deviceOptionsOpen, setDeviceOptionsOpen] = React.useState(false); 
  const [deviceEditModalOpen, setDeviceEditModalOpen] = React.useState(false);
  const [deviceDeleteModalOpen, setDeviceDeleteModalOpen] = React.useState(false);


  const editAndDelete = (
    <>
      <button onClick={(e) => setDeviceEditModalOpen(!deviceEditModalOpen)}>Edit</button>
      <button onClick={(e) => setDeviceDeleteModalOpen(!deviceDeleteModalOpen)}>Delete</button>
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
      <Modal isOpen={deviceDeleteModalOpen} onClose={() => { setDeviceDeleteModalOpen(false)}} title="Delete device?">
        <DeleteDeviceForm deviceId={device.id} closeForm={() => setDeviceDeleteModalOpen(false)}/>
      </Modal>
    </div>
  )
}

export default DeviceRowItem;