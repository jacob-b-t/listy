import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) { }

  public cancel() {
    this.canDismiss().then((p) => {
      if (p) {
        return this.modalCtrl.dismiss(null, 'cancel');
      } else {
        return null
      }
    })
  }

  private canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

}
