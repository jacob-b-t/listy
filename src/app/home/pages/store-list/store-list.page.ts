import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreListDataService } from '../../services/store-list-data.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit, AfterViewInit, OnDestroy {

  constructor(private storeDataService: StoreListDataService) { }

  public finishedLoading: boolean = false;

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.storeDataService.storageReady().subscribe((val) => {
        console.log(val);
        if (val) {
          this.storeDataService.getAllStores();
        }
      })
    )
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
