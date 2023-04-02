import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalService, StoreListDataService } from '../../../services';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { addressFormStructure, hoursFormStructure } from './form-structures';
import { FormControlStructure } from '../../../shared/interfaces/form-structure.interface';

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.scss'],
})
export class NewStoreComponent implements OnInit {
  public presentingElement: Element | null = null;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private fb: FormBuilder,
    private storeListDataService: StoreListDataService,
  ) {}

  public form: FormGroup = new FormGroup({});

  public addressFormStructure: FormControlStructure[] = addressFormStructure;
  public hoursFormStructure: FormControlStructure[] = hoursFormStructure;

  ngOnInit() {
    this.formInit();
    this.presentingElement = document.querySelector('.ion-page');
  }

  public cancel(): void {
    return this.modalService.cancel();
  }

  public addNewStore(): void {
    console.log(this.form)
  }

  private formInit(): void {
    this.form = this.fb.group({
      storeName: new FormControl('', Validators.required),
      image: new FormControl(''),
      address: this.addressFormInit(),
      openingHours: this.openingHoursInit(),
      orderPriority: new FormControl(''),
    });
  }

  private addressFormInit(): FormGroup {
    return this.fb.group({
      addressLineOne: new FormControl('', Validators.required),
      addressLineTwo: new FormControl(''),
      addressLineThree: new FormControl(''),
      city: new FormControl('', Validators.required),
      county: new FormControl(''),
      postcode: new FormControl('', Validators.required),
    });
  }

  private openingHoursInit(): FormGroup {
    return this.fb.group({
      sunday: new FormControl('', Validators.required),
      monday: new FormControl('', Validators.required),
      tuesday: new FormControl('', Validators.required),
      wednesday: new FormControl('', Validators.required),
      thursday: new FormControl('', Validators.required),
      friday: new FormControl('', Validators.required),
      saturday: new FormControl('', Validators.required),
    });
  }
}
