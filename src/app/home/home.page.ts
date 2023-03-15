import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
  }
}
