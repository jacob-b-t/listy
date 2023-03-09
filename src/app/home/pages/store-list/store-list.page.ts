import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreListDataService } from '../../services/store-list-data.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit, AfterViewInit, OnDestroy {

  constructor(private storeListDataService: StoreListDataService) { }

  public finishedLoading: boolean = false;

  //UI values
  public daysInWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  public addressFields: string[] = ['line1', 'line2', 'line3', 'city', 'county', 'postcode'];

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.storeListDataService.storageReady().subscribe((val) => {
        console.log(val);
        if (val) {
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
}
