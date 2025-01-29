import React from 'react';

import Button, { ButtonType } from 'src/base-components/Button/Button';
import Form from 'src/base-components/Form/Form';
import { Device } from 'src/types/types';

import './DeviceForm.scss';

interface DeviceFormProps {
  defaultValues?: Device;
  onSubmit: (data: Device) => void;
  closeForm: () => void;
  isDelete?: boolean;
}

const DeviceForm: React.FC<DeviceFormProps> = ({isDelete = false, ...props}) => {
  const { defaultValues, onSubmit, closeForm } = props;
  const { system_name, type, hdd_capacity } = defaultValues ?? {};

  const [formData, setFormData] = React.useState<Device>(defaultValues ?? { id: "", system_name: "", type: "", hdd_capacity: 0 });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, system_name: e.target.value });
  };

  const handleDeviceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, type: e.target.value });
  };

  const handleDeviceCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, hdd_capacity: Number(e.target.value) });
  };

  const systenNameField = (
    <div className="form__field">
      <label>System name *</label>
      <input name="systemName" defaultValue={system_name} onChange={handleNameChange}/>
    </div>
  )
  const deviceTypeField = (
    <div className="form__field">
      <label>Device type *</label>
      <input name="deviceType" defaultValue={type} onChange={handleDeviceTypeChange} />
    </div>
  )
  const deviceCapacityField = (
    <div className="form__field">
      <label>HDD capacity (GB)*</label>
      <input
        name="deviceCapacity"
        type="number"
        defaultValue={hdd_capacity}
        onChange={handleDeviceCapacityChange}
        />
    </div>
  )
  const fields = isDelete ? 
    [<div>{`You are about to delete the device ${defaultValues?.system_name}. This action cannot be undone`}</div>] : 
    [systenNameField, deviceTypeField, deviceCapacityField];

  const cancelButton = <Button text="Cancel" buttonType={ButtonType.NEUTRAL} onClick={() => {closeForm()}} additionalClassNames={["cancel-button"]} />;
  const submitButton = isDelete ? 
    <Button text="Delete" buttonType={ButtonType.ALERT} onClick={() => {
      onSubmit(formData)
      closeForm()
    }} 
      additionalClassNames={["delete-button"]}
    /> : 
    <Button text="Submit" buttonType={ButtonType.PRIMARY} onClick={() => {
      onSubmit(formData)
      closeForm()
    }} additionalClassNames={["submit-button"]} />;

  const actionButtons = [cancelButton, submitButton];

  return (<>
    <Form fields={fields} actionButtons={actionButtons} />
  </>)
};

export default DeviceForm;
