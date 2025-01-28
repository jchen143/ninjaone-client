export enum SortBy {
  HDD_CAPACITY = 'hdd_capacity',
  SYSTEM_NAME = 'system_name'
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export interface SortParams {
  sortBy: SortBy;
  sortOrder: SortOrder;
}

export enum DeviceTypes {
  WINDOWS = 'WINDOWS',
  LINUX = 'LINUX',
  MAC = 'MAC'
}
export interface Device {
  id: string;
  system_name: string;
  type: string;
  hdd_capacity: number;
}

export interface Filter {
  nameFilter: string;
  deviceFilter: DeviceTypes | "all";
}
