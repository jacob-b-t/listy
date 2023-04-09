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

export const imageOptions: ActionSheetInput = {
  header: 'How would you like to add an image',
  buttons: [
    {
      text: 'Add image from file',
      role: 'file'
    },
    {
      text: 'Take a new photo',
      role: 'photo'
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
  ]
}
