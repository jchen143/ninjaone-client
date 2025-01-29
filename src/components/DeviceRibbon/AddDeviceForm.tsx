import React from 'react';

import DeviceForm from 'src/base-components/Form/DeviceForm';
import { Device } from 'src/types/types';
import { createDevice } from 'src/util/devices-util';

interface AddDeviceFormProps {
  closeForm: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = (props) => {
  const { closeForm } = props;
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string|null>(null);

  const handleSubmit = async(data: Device) => {
    try {
      setIsLoading(true);
      setError(null);
      await createDevice(data);
      closeForm();
    } catch (error) {
      setError("Failed to create device");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} />;
};

export default AddDeviceForm;
