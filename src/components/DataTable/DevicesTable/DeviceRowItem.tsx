import React from "react"; 
import Modal from "src/base-components/Modal/Modal";
import { Device, DeviceTypes } from "src/types/types";
import EditDeviceForm from "src/components/DataTable/DevicesTable/EditDeviceForm";
import DeleteDeviceForm from "src/components/DataTable/DevicesTable/DeleteDeviceForm";

import "./DeviceRowItem.scss";
import AppleLogo from "src/media/AppleLogo";
import LinuxLogo from "src/media/LinuxLogo";
import WindowsLogo from "src/media/WindowsLogo";

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

  const getDeviceIcon = () => {
    switch(device.type) {
      case DeviceTypes.WINDOWS:
        return <WindowsLogo />
      case DeviceTypes.LINUX:
        return <LinuxLogo />
      case DeviceTypes.MAC:
        return <AppleLogo />
    }
  };

  const getDeviceTypeSubheaderString = () => {
    switch(device.type) {
      case DeviceTypes.WINDOWS:
        return "Windows workstation"
      case DeviceTypes.LINUX:
        return "Linux workstation"
      case DeviceTypes.MAC:
        return "Apple workstation"
    }
  }

  const getDeviceHddCapacityString = () => {
    return `${device.hdd_capacity} GB`
  }

  return(
    <>
      <div className="device-row-item">
        <div className="device-row-item__left">
          <div className="device-row-item__left__header">
            <div className="device-row-item__left__header__device-icon">{getDeviceIcon()}</div>
            <div className="device-row-item__left__header__device-name">{device.system_name}</div>
          </div>
          <div className="device-row-item__left__body">
            <div className="device-row-item__left__body__device-subheader">{`${getDeviceTypeSubheaderString()} - ${getDeviceHddCapacityString()}`}</div>
          </div>
        </div>

        <div className="device-row-item__right">
          <button onClick={(e) => setDeviceOptionsOpen(!deviceOptionsOpen)}></button>
          {deviceOptionsOpen && editAndDelete}
        </div>
      </div>

      <Modal isOpen={deviceEditModalOpen} onClose={() => { setDeviceEditModalOpen(false) }} title="Edit Device">
        <EditDeviceForm closeForm={() => { setDeviceEditModalOpen(false) }} deviceId={device.id} />
      </Modal>
      <Modal isOpen={deviceDeleteModalOpen} onClose={() => { setDeviceDeleteModalOpen(false) }} title="Delete device?">
        <DeleteDeviceForm deviceId={device.id} closeForm={() => setDeviceDeleteModalOpen(false)} />
      </Modal>
    </>
  )
}

export default DeviceRowItem;