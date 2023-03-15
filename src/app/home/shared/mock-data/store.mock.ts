import { StoresInterface } from "../interfaces/stores.interface";

export const mockStoreObject: StoresInterface = {
  name: 'initial value',
  openingHours: {
    sunday: '10.00 - 16.00',
    monday: '07.00 - 23.00',
    tuesday: '07.00 - 23.00',
    wednesday: '07.00 - 23.00',
    thursday: '07.00 - 23.00',
    friday: '07.00 - 23.00',
    saturday: '09.00 - 21.00',
  },
  address: {
    addressLineOne: 'string',
    city: 'London',
    county: 'London',
    postCode: 'E1 4RS'
  },
  image: 'none',
  guid: 'none',
  orderPriority: 9999999999999999
}
