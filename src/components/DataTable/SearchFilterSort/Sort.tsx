import { Dropdown } from 'primereact/dropdown';
import React from 'react';
import { SortBy, SortOrder, SortParams } from "src/types/types";

interface SortProps {
  setSortParams: (sortParams: SortParams) => void;
  sortParams: SortParams;
}

interface SortOption {
  label: string;
  value: SortParams;
}

const Sort: React.FC<SortProps> = (props) => {

  const { setSortParams, sortParams } = props;

  const selectedOption = sortOptions.find(
    option =>
      option.value.sortBy === sortParams.sortBy &&
      option.value.sortOrder === sortParams.sortOrder
  );

  return (
    <Dropdown value={selectedOption} onChange={(e) => setSortParams(e.value)} options={sortOptions} optionLabel="label"
        placeholder={selectedOption?.label} className="w-full md:w-14rem" />
  );
};

const sortOptions: SortOption[] = [
  { label: "Sort By: HDD Capacity (Descending)", value: { sortBy: SortBy.HDD_CAPACITY, sortOrder: SortOrder.DESC } },
  { label: "Sort By: HDD Capacity (Ascending)", value: { sortBy: SortBy.HDD_CAPACITY, sortOrder: SortOrder.ASC } },
  { label: "Sort By: Device Name (Descending)", value: { sortBy: SortBy.SYSTEM_NAME, sortOrder: SortOrder.DESC } },
  { label: "Sort By: Device Name (Ascending)", value: { sortBy: SortBy.SYSTEM_NAME, sortOrder: SortOrder.ASC } },

];

export default Sort;
