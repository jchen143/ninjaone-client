import React from "react"; 
import Modal from "src/base-components/Modal/Modal";
import { Device, DeviceTypes } from "src/types/types";
import EditDeviceForm from "src/components/DataTable/DevicesTable/EditDeviceForm";
import DeleteDeviceForm from "src/components/DataTable/DevicesTable/DeleteDeviceForm";

import "./DeviceRowItem.scss";
import AppleLogo from "src/media/AppleLogo";
import LinuxLogo from "src/media/LinuxLogo";
import WindowsLogo from "src/media/WindowsLogo";
import Ellipses from "src/media/Ellipses";

interface DeviceItemProps {
  device: Device;
}

const DeviceRowItem: React.FC<DeviceItemProps> = (props) => {
  const { device } = props; 
  const [deviceOptionsOpen, setDeviceOptionsOpen] = React.useState(false); 
  const [deviceEditModalOpen, setDeviceEditModalOpen] = React.useState(false);
  const [deviceDeleteModalOpen, setDeviceDeleteModalOpen] = React.useState(false);


  const editAndDelete = (
    <div className="p-dropdown-panel edit-and-delete-dropdown-panel">
      <div className="p-dropdown-items-wrapper edit-and-delete-dropdown-panel__items-wrapper">
        <ul className="p-dropdown-items edit-and-delete-dropdown-panel__items">
          <li className="p-dropdown-item edit-and-delete-dropdown-panel__item">
            <span onClick={(e) => {
              setDeviceEditModalOpen(!deviceEditModalOpen)
              setDeviceOptionsOpen(false)
            }} >Edit</span>
          </li>
          <li className="p-dropdown-item edit-and-delete-dropdown-panel__delete edit-and-delete-dropdown-panel__item">
            <span onClick={(e) => {
              setDeviceDeleteModalOpen(!deviceDeleteModalOpen)
              setDeviceOptionsOpen(false)
            }} >Delete</span>
          </li>
        </ul>
      </div>

    </div>
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

        <div className={`device-row-item__right ${deviceOptionsOpen && "device-row-item__right-open"}`}>
          <button className="device-row-item__right__button" onClick={(e) => setDeviceOptionsOpen(!deviceOptionsOpen)}>
            <Ellipses />
          </button>
          {deviceOptionsOpen && editAndDelete}
        </div>
      </div>

      <Modal isOpen={deviceEditModalOpen} onClose={() => { setDeviceEditModalOpen(false) }} title="Edit Device">
        <EditDeviceForm closeForm={() => { setDeviceEditModalOpen(false) }} deviceId={device.id} />
      </Modal>
      <Modal isOpen={deviceDeleteModalOpen} additionalClassNames={["delete-modal"]} onClose={() => { setDeviceDeleteModalOpen(false) }} title="Delete device?">
        <DeleteDeviceForm deviceId={device.id} closeForm={() => setDeviceDeleteModalOpen(false)} />
      </Modal>
    </>
  )
}

export default DeviceRowItem;