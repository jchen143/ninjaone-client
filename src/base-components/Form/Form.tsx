import React from 'react';

interface BaseFormProps {
  fields: React.ReactNode[];  
  actionButtons: React.ReactNode[];
}

const Form: React.FC<BaseFormProps> = (props) => {
  const { fields, actionButtons } = props;
  return (
    <div className="form">
        <div className="form-fields">
          {fields}
        </div>
        <div className="form-actions">
          {actionButtons}
        </div>
    </div>
  );
};

export default Form;