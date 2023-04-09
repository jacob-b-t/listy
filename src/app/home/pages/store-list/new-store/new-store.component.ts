import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService, StoreListDataService, ImageService, ActionSheetInput, ActionSheetService } from '../../../services';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { addressFormStructure, hoursFormStructure } from './form-structures';
import { modalCancel, imageOptions } from './new-form-interfaces';
import { FormControlStructure } from '../../../shared/interfaces/form-structure.interface';

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.scss'],
})
export class NewStoreComponent implements OnInit {
  public presentingElement: Element | null = null;

  constructor(
    private actionService: ActionSheetService,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private fb: FormBuilder,
    private storeListDataService: StoreListDataService,
    private imageService: ImageService,
  ) {}

  public form: FormGroup = new FormGroup({});

  public addressFormStructure: FormControlStructure[] = addressFormStructure;
  public hoursFormStructure: FormControlStructure[] = hoursFormStructure;

  //action sheets
  private modalCancel: ActionSheetInput = modalCancel;
  private imageOptions: ActionSheetInput = imageOptions;

  ngOnInit() {
    this.formInit();
    this.presentingElement = document.querySelector('.ion-page');
  }

  public cancel(): void {
    return this.modalService.cancel(this.modalCancel);
  }

  public addNewStore(): void {
    console.log(this.form)
  }

  public addNewImage(): void {
    this.actionService.openReturningActionSheet(this.imageOptions).then((selection) => {
      if (selection === 'photo') {
        this.takeNewPhoto();
      } else if (selection === 'file') {
        this.getImageFromGallery();
      }
    })
    .catch((res) => {});
  }

  private takeNewPhoto(): void {
    this.imageService.captureNewPhoto().then((photo) => {
      console.log(photo);
    });
  }

  private getImageFromGallery(): void {
    console.log(this.imageService.selectImage())
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
