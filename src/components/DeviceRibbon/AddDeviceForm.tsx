import React from 'react';

import DeviceForm from 'src/base-components/Form/DeviceForm';
import { Device } from 'src/types/types';
import { createDevice } from 'src/util/devices-util';

interface AddDeviceFormProps {
  closeForm: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = (props) => {
  const { closeForm } = props;
  const handleSubmit = async(data: Device) => {
    await createDevice(data);
  };

  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} />;
};

export default AddDeviceForm;
