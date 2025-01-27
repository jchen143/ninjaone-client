import React from 'react';

import { Dropdown } from 'primereact/dropdown';
import DropdownIcon from 'src/media/DropdownIcon';

import './BaseDropdown.scss';


interface BaseDropdownProps {
  customOptions: any[];
  onChange: (value: any) => void;
  value: any;
  optionLabel?: string;
  placeholder?: string;
  className?: string;
}

export const BaseDropdown: React.FC<BaseDropdownProps> = (props) => {
  const { customOptions, onChange, value, optionLabel, placeholder, className } = props;  
  return (
    <Dropdown 
      options={customOptions} 
      onChange={onChange} 
      value={value} 
      optionLabel={optionLabel} 
      placeholder={placeholder} 
      className={className} 
      dropdownIcon={<DropdownIcon />}
      collapseIcon={<DropdownIcon />}
    />
  );
};

export default BaseDropdown;