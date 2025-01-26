import React from 'react';

import { Filter, SortParams } from 'src/components/DataTable/DataTable';
import DeviceFilter from 'src/components/DataTable/SearchFilterSort/DeviceFilter';
import Refresh from 'src/components/DataTable/SearchFilterSort/Refresh';
import Search from 'src/components/DataTable/SearchFilterSort/Search';
import Sort from 'src/components/DataTable/SearchFilterSort/Sort';



interface SearchAndFilterBarProps {
  setSortParams: (sortParams: SortParams) => void;
  setFilters: (filters: Filter) => void;
  filters: Filter;
  sortParams: SortParams;
}

const SearchAndFilterBar: React.FC<SearchAndFilterBarProps> = (props) => {
  const { setSortParams, setFilters, filters } = props;
  
  return (
    <div className="search-and-filter-bar">
      <Search filters={filters} setFilters={setFilters}/>
      <DeviceFilter filters={filters} setFilters={setFilters} />
      {/* <DeviceFilter filters={filters} setFilters={setFilters} />
      <Sort setSortParams={setSortParams}/> */}
      <Refresh />
    </div>
  );
};

export default SearchAndFilterBar;
