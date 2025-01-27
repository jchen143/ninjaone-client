import React from 'react';

import { Filter, SortParams } from 'src/types/types';
import DeviceFilter from 'src/components/DataTable/SearchFilterSort/DeviceFilter';
import Refresh from 'src/components/DataTable/SearchFilterSort/Refresh';
import Search from 'src/components/DataTable/SearchFilterSort/Search';
import Sort from 'src/components/DataTable/SearchFilterSort/Sort';

import './SearchAndFilterBar.scss';

interface SearchAndFilterBarProps {
  setSortParams: (sortParams: SortParams) => void;
  setFilters: (filters: Filter) => void;
  filters: Filter;
  sortParams: SortParams;
}

const SearchAndFilterBar: React.FC<SearchAndFilterBarProps> = (props) => {
  const { setSortParams, setFilters, filters, sortParams } = props;
  
  return (
    <div className="search-and-filter-bar">
      <div className="search-and-filter-bar__left">
        <Search filters={filters} setFilters={setFilters} />
        <DeviceFilter filters={filters} setFilters={setFilters} />
        <Sort setSortParams={setSortParams} sortParams={sortParams} />
      </div>
      <div className="search-and-filter-bar__right">
        <Refresh />
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
