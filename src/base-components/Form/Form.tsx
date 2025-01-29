import React from 'react';

import './Form.scss';
interface BaseFormProps {
  fields: React.ReactNode[];  
  actionButtons: React.ReactNode[];
}

const Form: React.FC<BaseFormProps> = (props) => {
  const { fields, actionButtons } = props;
  return (
    <div className="form">
        <div className="form__fields">
          {fields}
        </div>
        <div className="form__actions">
          {actionButtons}
        </div>
    </div>
  );
};

export default Form;