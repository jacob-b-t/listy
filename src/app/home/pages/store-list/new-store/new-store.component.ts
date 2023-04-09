import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalService, StoreListDataService, ImageService } from '../../../services';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { addressFormStructure, hoursFormStructure } from './form-structures';
import { modalCancel } from './new-form-interfaces';
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
    private imageService: ImageService,
  ) {}

  public form: FormGroup = new FormGroup({});

  public addressFormStructure: FormControlStructure[] = addressFormStructure;
  public hoursFormStructure: FormControlStructure[] = hoursFormStructure;

  ngOnInit() {
    this.formInit();
    this.presentingElement = document.querySelector('.ion-page');
  }

  public cancel(): void {
    return this.modalService.cancel(modalCancel);
  }

  public addNewStore(): void {
    console.log(this.form)
  }

  public takeNewPhoto(): void {
    this.imageService.captureNewPhoto();
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
      addressLineOne: new FormControl(''),
      addressLineTwo: new FormControl(''),
      addressLineThree: new FormControl(''),
      city: new FormControl(''),
      county: new FormControl(''),
      postcode: new FormControl(''),
    });
  }

  private openingHoursInit(): FormGroup {
    return this.fb.group({
      sunday: new FormControl(''),
      monday: new FormControl(''),
      tuesday: new FormControl(''),
      wednesday: new FormControl(''),
      thursday: new FormControl(''),
      friday: new FormControl(''),
      saturday: new FormControl(''),
    });
  }
}
