import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetInput } from './action-sheet.interface';
import { ActionSheetService } from './action-sheet.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController, private actionSheetSerivce: ActionSheetService) { }

  public cancel(actionSheetInput: ActionSheetInput) {
    this.actionSheetSerivce.openConfirmationActionSheet(actionSheetInput).then((p) => {
      if (p) {
        return this.modalCtrl.dismiss(null, 'cancel');
      } else {
        return null
      }
    })
  }

}
