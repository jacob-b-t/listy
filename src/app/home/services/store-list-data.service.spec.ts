import { TestBed } from '@angular/core/testing';

import { StoreListDataService } from './store-list-data.service';

describe('StoreListDataService', () => {
  let service: StoreListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
