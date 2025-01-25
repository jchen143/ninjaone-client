import React from 'react';

import DevicesTable from 'src/components/DataTable/DevicesTable/DevicesTable';

import { Device, fetchDevices } from 'src/util/devices-util';

// import './DataTable.scss';

const DataTable: React.FC = () => {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadDevices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const devices = await fetchDevices();
      setDevices(devices);
    } catch (err) {
      setError('Failed to fetch devices');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadDevices();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="data-table">
      {/* <SearchAndFilterBar onRefresh={loadDevices} /> */}
      {isLoading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <DevicesTable devices={devices} />
      )}
    </div>
  );
};

export default DataTable;
