export interface StoresInterface {
  name: string;
  openingHours: OpeningHoursInterface;
  address: AddressInterface;
  image?: string;
  guid: string;
  orderPriority: number;
}

export interface OpeningHoursInterface {
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

export interface AddressInterface {
  addressLineOne: string;
  addressLineTwo?: string;
  addressLineThree?: string;
  city: string;
  county?: string;
  postCode: string;
}
