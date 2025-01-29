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
  const [device, setDevice] = React.useState<Device|undefined>(undefined); 
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string|null>(null);

  const handleSubmit = async (data: Device) => {
    try {
      setIsLoading(true);
      setError(null);
      await updateDevice(data);
      closeForm(); 
    } catch (error) {
      setError("Failed to update device");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const loadDevice = async () => {
      try {
        setIsLoading(true); 
        setError(null); 

        const device = await fetchDeviceById(deviceId); 
        setDevice(device); 
      } catch (error) {
        setError("Failed to find device"); 
      } finally {
        setIsLoading(false); 
      }
    }
    
    loadDevice();
  }, [deviceId]);

  if(isLoading) return <div>Loading...</div>
  if (error) {
    return <div className="error-message">{error}</div>;
  };


  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} defaultValues={device}/>;
};

export default EditDeviceForm;
