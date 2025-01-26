import React from 'react';

import DeviceForm from 'src/base-components/Form/DeviceForm';
import { Device } from 'src/types/types';
import { updateDevice, fetchDeviceById } from 'src/util/devices-util';

interface EditDeviceFormProps {
  closeForm: () => void;
  deviceId: string;
}

const EditDeviceForm: React.FC<EditDeviceFormProps> = (props) => {
  const { closeForm, deviceId } = props;
  const [device, setDevice] = React.useState<Device|null>(null); 
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleSubmit = async (data: Device) => {
    await updateDevice(data);
  };

  React.useEffect(() => {
    fetchDeviceById(deviceId); 
  }, [])

  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} />;
};

export default EditDeviceForm;
