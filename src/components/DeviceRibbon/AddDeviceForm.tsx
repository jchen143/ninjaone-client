import React from 'react';

import DeviceForm from 'src/base-components/Form/DeviceForm';
import { Device } from 'src/util/devices-util';

interface AddDeviceFormProps {
  closeForm: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = (props) => {
  const { closeForm } = props;
  const handleSubmit = (data: Device) => {
    console.log("jochen");
    console.log(data);
  };

  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} />;
};

export default AddDeviceForm;
