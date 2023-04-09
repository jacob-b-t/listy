import { ActionSheetInput } from '../../../services'

export const modalCancel: ActionSheetInput = {
  header: 'Are you sure',
  buttons: [
    {
      text: 'Yes',
      role: 'confirm'
    },
    {
      text: 'No',
      role: 'cancel'
    }
  ],
  role: 'confirm'
}
