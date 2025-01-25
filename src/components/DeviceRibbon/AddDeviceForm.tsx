import React from 'react';

import DeviceForm, { DeviceData } from 'src/base-components/Form/DeviceForm';

interface AddDeviceFormProps {
  closeForm: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = (props) => {
  const { closeForm } = props;
  const handleSubmit = (data: DeviceData) => {
    console.log("jochen");
    console.log(data);
  };

  return <DeviceForm onSubmit={handleSubmit} closeForm={closeForm} />;
};

export default AddDeviceForm;
