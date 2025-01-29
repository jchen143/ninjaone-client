import React from 'react';

import Button, { ButtonType } from 'src/base-components/Button/Button';
import Form from 'src/base-components/Form/Form';
import { Device, DeviceTypes } from 'src/types/types';
import BaseDropdown from 'src/base-components/Dropdown/BaseDropdown';

import './DeviceForm.scss';

interface DeviceOption {
  label: string;
  value: DeviceTypes;
}

const deviceOptions: DeviceOption[] = [
  { label: "Windows Workstation", value: DeviceTypes.WINDOWS },
  { label: "Linux Workstation", value: DeviceTypes.LINUX },
  { label: "Mac Workstation", value: DeviceTypes.MAC },
];

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
  const [systemNameError, setSystemNameError] = React.useState(false);
  const [deviceTypeError, setDeviceTypeError] = React.useState(false);
  const [hddCapacityError, setHddCapacityError] = React.useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, system_name: e.target.value });
  };

  const handleDeviceTypeChange = (e: any) => {
    setFormData({ ...formData, type: e.value });
  };

  const handleDeviceCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, hdd_capacity: Number(e.target.value) });
  };

  const handleDeviceAddOrEditSubmit = () => {
    const hasValidName = formData.system_name.length > 0; 
    const hasValidCapacity = typeof formData.hdd_capacity === 'number' && formData.hdd_capacity > 0;
    const hasValidType = formData.type.length > 0 && formData.type in DeviceTypes;

    if(hasValidName && hasValidCapacity && hasValidType) {
      onSubmit(formData);
      closeForm();
    } else {
      if (!hasValidName) {
        setSystemNameError(true);
      } else {
        setSystemNameError(false);
      }
      if (!hasValidCapacity) {
        setHddCapacityError(true); 
      } else {
        setHddCapacityError(false);
      }
      if (!hasValidType) {
        setDeviceTypeError(true);
      } else {
        setDeviceTypeError(false);
      }
    }
  }

  const systenNameField = (
    <div className="form__field">
      <label className={systemNameError ? "red" : ""}>
        System name *{systemNameError && " (field must be filled out with valid data!)"}
      </label>
      <input name="systemName" defaultValue={system_name} onChange={handleNameChange}/>
    </div>
  )
  const deviceTypeField = (
    <div className="form__field">
      <label className={deviceTypeError ? "red" : ""}>
        Device type *{deviceTypeError && " (field must be filled out with valid data!)"}
      </label>
      <BaseDropdown
        customOptions={deviceOptions}
        onChange={handleDeviceTypeChange}
        value={formData.type}
        optionLabel="label"
        placeholder="Select device type"
        className="w-full"
      />
    </div>
  )
  const deviceCapacityField = (
    <div className="form__field">
      <label className={hddCapacityError ? "red" : ""}>
        HDD capacity (GB)*{hddCapacityError && " (field must be filled out with valid data!)"}
      </label>
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
      handleDeviceAddOrEditSubmit()
    }} additionalClassNames={["submit-button"]} />;

  const actionButtons = [cancelButton, submitButton];

  return (<>
    <Form fields={fields} actionButtons={actionButtons} />
  </>)
};

export default DeviceForm;
