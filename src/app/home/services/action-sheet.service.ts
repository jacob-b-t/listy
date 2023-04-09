import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetInput } from './action-sheet.interface';

@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor(private actionSheetCtrl: ActionSheetController,) { }

  public async openConfirmationActionSheet(actionSheetInput: ActionSheetInput): Promise<boolean> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: actionSheetInput.header,
      buttons: actionSheetInput.buttons
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === actionSheetInput.role;
  };

  public async openReturningActionSheet(actionSheetInput: ActionSheetInput): Promise<string> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: actionSheetInput.header,
      buttons: actionSheetInput.buttons
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role as string;
  }
}
