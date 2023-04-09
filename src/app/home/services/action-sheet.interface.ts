export interface ActionSheetInput {
  header: string;
  buttons: ButtonOptions[];
  role?: string
}

export interface ButtonOptions {
  text: string;
  role: string;
  data?: DataObject
}

export interface DataObject {
  action: string;
}
