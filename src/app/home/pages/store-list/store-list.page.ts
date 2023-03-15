import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreListDataService } from '../../services/store-list-data.service';
import { StoresInterface } from '../../shared/interfaces/stores.interface';
import { NewStoreComponent } from './new-store/new-store.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit, AfterViewInit, OnDestroy {

  constructor(private storeListDataService: StoreListDataService, private modalCtrl: ModalController) { }

  public finishedLoading: boolean = false;

  //UI values
  public daysInWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  public addressFields: string[] = ['line1', 'line2', 'line3', 'city', 'county', 'postcode'];
  public storeList: StoresInterface[] = [];

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.storeListDataService.storageReady().subscribe((val) => {
        if (val) {
          this.storeListDataService.storesSubject$.subscribe((val) => {
            this.storeList = val;
          })
          this.storeListDataService.getAllStores()
          .then(() => this.finishedLoading = true);
        }
      })
    )
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public async addNewStore(event: string) {
    const modal = await this.modalCtrl.create({
      component: NewStoreComponent,
      cssClass: 'phone-modal'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
