import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FABComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() clickedPath: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

  }

  public add(): void {
    this.clickedPath.emit(this.router.url);
  }
}
