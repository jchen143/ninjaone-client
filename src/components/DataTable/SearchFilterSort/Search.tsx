import React from 'react';
import { Filter } from 'src/types/types';

interface SearchProps {
  setFilters: (filters: Filter) => void;
  filters: Filter;
}

const Search: React.FC<SearchProps> = (props) => {
  const { setFilters, filters } = props; 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); 
    setFilters({...filters, nameFilter: e.target.value});
  }
  
  const searchFilter = <input type="text" onChange={handleSearchChange}/>

  return searchFilter;
};

export default Search;
