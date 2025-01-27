import React from 'react';

import DevicesTable from 'src/components/DataTable/DevicesTable/DevicesTable';
import SearchAndFilterBar from 'src/components/DataTable/SearchFilterSort/SearchAndFilterBar';

import { fetchDevices } from 'src/util/devices-util';
import { Device, Filter, SortBy, SortOrder, SortParams } from 'src/types/types';

import './DataTable.scss'; 

const DataTable: React.FC = () => {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const [filters, setFilters] = React.useState<Filter>({
    nameFilter: "",
    deviceFilter: "all"
  });

  const [sortParams, setSortParams] = React.useState<SortParams>({
    sortBy: SortBy.HDD_CAPACITY,
    sortOrder: SortOrder.DESC
  });

  const sortAndFilterDevices = (devices: Device[], sortParams: SortParams, filters: Filter): Device[] => {
    const filteredDevices = devices.filter((device) => {
      const nameMatch = device.system_name.toLowerCase().includes(filters.nameFilter.toLowerCase())
      const deviceMatch = filters.deviceFilter === "all" || device.type.toLowerCase().includes(filters.deviceFilter.toLowerCase());
      return nameMatch && deviceMatch;
    });

    return filteredDevices.sort((a, b) => {
      const field = sortParams.sortBy; 
      if(field === SortBy.HDD_CAPACITY) {
        return sortParams.sortOrder === SortOrder.ASC ? a[field] - b[field] : b[field] - a[field];
      } else {
        return sortParams.sortOrder === SortOrder.ASC ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  };  

  const loadDevices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const devices = await fetchDevices();

      const sortedAndFilteredDevices = sortAndFilterDevices(devices, sortParams, filters);
      setDevices(sortedAndFilteredDevices);
    } catch (err) {
      setError('Failed to fetch devices');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadDevices();

    // may need to take out filters, sort params, etc. if we only want to trigger on refresh click
  }, [filters, sortParams]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="data-table">
      <SearchAndFilterBar  setFilters={setFilters} setSortParams={setSortParams} filters={filters} sortParams={sortParams}/>
      {isLoading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <DevicesTable devices={devices} />
      )}
    </div>
  );
};

export default DataTable;
