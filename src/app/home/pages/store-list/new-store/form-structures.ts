import { FormControlStructure } from '../../../shared/interfaces/form-structure.interface';

export const addressFormStructure: FormControlStructure[] = [
  {
    label: 'First line of address',
    control: 'addressLineOne',
    required: true,
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
    required: true,
  },
  {
    label: 'County',
    control: 'county',
    required: true,
  },
  {
    label: 'Postcode',
    control: 'postcode',
    required: true,
  },
];

export const hoursFormStructure: FormControlStructure[] = [
  {
    label: 'Sunday',
    control: 'sunday',
    required: true,
  },
  {
    label: 'Monday',
    control: 'monday',
    required: true,
  },
  {
    label: 'Tuesday',
    control: 'tuesday',
    required: true,
  },
  {
    label: 'Wednesday',
    control: 'wednesday',
    required: true,
  },
  {
    label: 'Thursday',
    control: 'thursday',
    required: true,
  },
  {
    label: 'Friday',
    control: 'friday',
    required: true,
  },
  {
    label: 'Saturday',
    control: 'saturday',
    required: true,
  },
];
