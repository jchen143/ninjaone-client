import React from "react";

import AddDeviceForm from "./AddDeviceForm";
import Button, { ButtonType } from "src/base-components/Button/Button";
import Modal from "src/base-components/Modal/Modal";
import PlusSignLogo from "src/media/PlusSignLogo";


import "./DeviceRibbon.scss";


const DeviceRibbon: React.FC = () => {

  const [deviceAddModalOpen, setDeviceAddModalOpen] = React.useState(false);

  return (
    <>
      <div className="device-ribbon">
        <div className="device-ribbon-title">Devices</div>
        <Button icon={<PlusSignLogo />} text="Add Device" buttonType={ButtonType.PRIMARY} onClick={() => {setDeviceAddModalOpen(true)}} />
      </div>
      <Modal isOpen={deviceAddModalOpen} onClose={() => {setDeviceAddModalOpen(false)}} title="Add Device">
        <AddDeviceForm closeForm={() => {setDeviceAddModalOpen(false)}}/>
      </Modal>
    </>
  );
};

export default DeviceRibbon;
