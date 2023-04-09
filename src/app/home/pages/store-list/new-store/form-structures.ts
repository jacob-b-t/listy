import { FormControlStructure } from '../../../shared/interfaces/form-structure.interface';

export const addressFormStructure: FormControlStructure[] = [
  {
    label: 'First line of address',
    control: 'addressLineOne',
    required: false,
  },
  {
    label: 'Second line of address',
    control: 'addressLineTwo',
    required: false,
  },
  {
    label: 'Third line of address',
    control: 'addressLineThree',
    required: false,
  },
  {
    label: 'City',
    control: 'city',
    required: false,
  },
  {
    label: 'County',
    control: 'county',
    required: false,
  },
  {
    label: 'Postcode',
    control: 'postcode',
    required: false,
  },
];

export const hoursFormStructure: FormControlStructure[] = [
  {
    label: 'Sunday',
    control: 'sunday',
    required: false,
  },
  {
    label: 'Monday',
    control: 'monday',
    required: false,
  },
  {
    label: 'Tuesday',
    control: 'tuesday',
    required: false,
  },
  {
    label: 'Wednesday',
    control: 'wednesday',
    required: false,
  },
  {
    label: 'Thursday',
    control: 'thursday',
    required: false,
  },
  {
    label: 'Friday',
    control: 'friday',
    required: false,
  },
  {
    label: 'Saturday',
    control: 'saturday',
    required: false,
  },
];
