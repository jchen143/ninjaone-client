import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export interface Device {
  id?: number;
  systemName: string;
  deviceType: string;
  deviceCapacity: number;
}

// isAxiosError === isHTTPError more or less

export const fetchDevices = async (): Promise<Device[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/devices`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch devices: ${axios.isAxiosError(error) ? error.message : 'unknown error'}`);
  }
};

export const fetchDeviceById = async (id: string): Promise<Device> => {
  try {
    const response = await axios.get(`${BASE_URL}/devices/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Device with id ${id} not found`);
      }
      throw new Error(`Failed to fetch device: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching device');
  }
};

export const deleteDevice = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/devices/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Device with id ${id} not found`);
      }
      throw new Error(`Failed to delete device: ${error.message}`);
    }
    throw new Error('Unknown error occurred while deleting device');
  }
};

export const createDevice = async (device: Device): Promise<Device> => {
  try {
    const response = await axios.post(`${BASE_URL}/devices`, device);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        throw new Error('Invalid device data provided');
      }
      throw new Error(`Failed to create device: ${error.message}`);
    }
    throw new Error('Unknown error occurred while creating device');
  }
}; 

export const editDevice = async (device: Device): Promise<Device> => {
  try {
    const response = await axios.put(`${BASE_URL}/devices/${device.id}`, device);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Device with id ${device.id} not found`);
      }
      throw new Error(`Failed to edit device: ${error.message}`);
    }
    throw new Error('Unknown error occurred while editing device');
  }
};