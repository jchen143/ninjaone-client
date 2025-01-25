import React from 'react';

import Button, { ButtonType } from 'src/base-components/Button/Button';
import Form from 'src/base-components/Form/Form';
import { Device } from 'src/util/devices-util';


interface DeviceFormProps {
  defaultValues?: Device;
  onSubmit: (data: Device) => void;
  closeForm?: () => void;
}

const DeviceForm: React.FC<DeviceFormProps> = (props) => {
  const { defaultValues, onSubmit, closeForm } = props;
  const { systemName, deviceType, deviceCapacity } = defaultValues ?? {};

  const [formData, setFormData] = React.useState<Device>(defaultValues ?? { systemName: "", deviceType: "", deviceCapacity: 0 });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, systemName: e.target.value });
  };

  const handleDeviceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, deviceType: e.target.value });
  };

  const handleDeviceCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, deviceCapacity: Number(e.target.value) });
  };

  const systenNameField = <input name="systemName" defaultValue={systemName} onChange={handleNameChange}/>
  const deviceTypeField = <input name="deviceType" defaultValue={deviceType} onChange={handleDeviceTypeChange} />
  const deviceCapacityField = <input
        name="deviceCapacity"
        type="number"
        defaultValue={deviceCapacity}
          onChange={handleDeviceCapacityChange}
        />

  const fields = [systenNameField, deviceTypeField, deviceCapacityField];

  const cancelButton = <Button text="Cancel" buttonType={ButtonType.NEUTRAL} onClick={() => {closeForm?.()}} />;
  const submitButton = <Button text="Add Device" buttonType={ButtonType.PRIMARY} onClick={() => {onSubmit(formData)}} />;

  const actionButtons = [cancelButton, submitButton];

  return (<>
    <Form fields={fields} actionButtons={actionButtons} />
  </>)
};

export default DeviceForm;
