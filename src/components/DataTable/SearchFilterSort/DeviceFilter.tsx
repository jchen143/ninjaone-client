import React from 'react';
import { DeviceTypes, Filter } from "src/types/types"
import BaseDropdown from 'src/base-components/Dropdown/BaseDropdown';


interface DeviceFilterProps {
  setFilters: (filters: Filter) => void;
  filters: Filter;
}


interface DeviceOption {
  label: string;
  value: DeviceTypes | "all"; // change this into a type to be used in both places
}

const deviceOptions: DeviceOption[] = [
  { label: "Device Type: All", value: "all"},
  { label: "Device Type: Linux", value: DeviceTypes.LINUX },
  { label: "Device Type: Windows", value: DeviceTypes.WINDOWS },
  { label: "Device Type: Mac", value: DeviceTypes.MAC },
];


const DeviceFilter: React.FC<DeviceFilterProps> = (props) => {
  const { setFilters, filters } = props; 

  return (
    // <Dropdown value={filters.deviceFilter} onChange={(e) => setFilters({...filters, deviceFilter: e.value})} options={deviceOptions} optionLabel="label"
    //   placeholder="Select a Device Type" className="w-full md:w-14rem" />
    <BaseDropdown customOptions={deviceOptions} onChange={(e) => setFilters({...filters, deviceFilter: e.value})} value={filters.deviceFilter} optionLabel="label" placeholder="Select a Device Type" className="w-full md:w-14rem" />
  )
};

export default DeviceFilter;
