import React from 'react';
import SearchIcon from 'src/media/SearchIcon';
import { Filter } from 'src/types/types';
import './Search.scss';

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
  
  const searchFilter = 
    <span className="search-container">
      <SearchIcon />
      <input type="text" placeholder="Search" onChange={handleSearchChange} />
    </span>
  

  return searchFilter;
};

export default Search;
