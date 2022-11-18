import { Items } from "./items";

export class Section {
  id?: string;
  boxId?:string;
  color?:string;
  dateCreated?:string;
  favorite?:boolean;
  name?:string;
  items?:Items[];
}
