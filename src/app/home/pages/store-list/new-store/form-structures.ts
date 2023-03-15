import { FormControlStructure } from '../../../shared/interfaces/form-structure.interface'

export const addressFormStructure: FormControlStructure[] = [
  {
    label: 'First line of address',
    control: 'addressLineOne'
  },
  {
    label: 'Second line of address',
    control: 'addressLineTwo'
  },
  {
    label: 'Third line of address',
    control: 'addressLineThree'
  },
  {
    label: 'City',
    control: 'city'
  },
  {
    label: 'County',
    control: 'county'
  },
  {
    label: 'Postcode',
    control: 'postcode'
  }
]

export const hoursFormStructure: FormControlStructure[] = [
  {
    label: 'Sunday',
    control: 'sunday'
  },
  {
    label: 'Monday',
    control: 'monday'
  },
  {
    label: 'Tuesday',
    control: 'tuesday'
  },
  {
    label: 'Wednesday',
    control: 'wednesday'
  },
  {
    label: 'Thursday',
    control: 'thursday'
  },
  {
    label: 'Friday',
    control: 'friday'
  },
  {
    label: 'Saturday',
    control: 'saturday'
  }
]
