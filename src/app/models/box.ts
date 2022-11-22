import { Section } from "./section";


export class Box {
  id?: string;
  dateCreated?: string;
  download?:boolean;
  favorite?:boolean;
  name?:string;
  privateLink?:string;
  boxType?:boolean;
  author?:string;
  description?:string;
  sections?:Section[];
}
