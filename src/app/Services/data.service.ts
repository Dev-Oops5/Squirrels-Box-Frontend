import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Box } from '../models/box';
import { Items } from '../models/items';
import { Section } from '../models/section';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  boxesRef: AngularFireList<any>;
  sectionsRef: AngularFireList<any>;
  itemsRef: AngularFireList<any>;
  boxRef: AngularFireObject<any>;
  sectionRef: AngularFireObject<any>;
  itemRef: AngularFireObject<any>;
  boxTemp: Box;
  sectionTemp: Section;
  id1:string = '';

  constructor(private afs: AngularFireDatabase, private userService: UserService) {

   }


   // Section CRUD - BOX

   getAllBoxes(){
    this.boxesRef = this.afs.list('boxes');
    return this.boxesRef;
   }

   AddBox(box: Box){
    let autho: string;
    this.userService.getCurrentUser().then((res) => {
      autho = res.email;
      box.author = autho;
      this.AddRealBox(box);
    });
    //boxRef.key = box.name;

   }

   AddRealBox(box: Box){
    let date = new Date();
    let currentDate = date.toLocaleString();
    let formatDate = currentDate.replace(/[,]/, '');
    this.id1 = this.afs.createPushId()
    this.afs.object('boxes/'+box.name).set({
      id: this.id1,
      name: box.name,
      boxType: box.boxType,
      dateCreated:  formatDate,
      download: true,
      favorite: true,
      privateLink: box.privateLink,
      author: box.author,
    });
   }

   saveBox(box){
    this.boxTemp = box;
   }

   getBoxTemp(){
    return this.boxTemp;
   }

   GetBox(name: string){
    this.boxRef = this.afs.object('boxes/'+name);
    return this.boxRef;
   }

   UpdateBox(box:Box, newName:string){


    this.DeleteBox(box.name);
    this.afs.object('boxes/'+newName).set({
      id: box.id,
      name: newName,
      boxType: box.boxType,
      dateCreated:  box.dateCreated,
      download: true,
      favorite: true,
      privateLink: box.privateLink,
      author: box.author,
   })

  }

   DeleteBox(name:string){
    this.boxRef = this.afs.object('boxes/'+name);
    this.boxRef.remove();
   }

   // Section CRUD - Section

   getAllSections(nameBox:string){
    this.sectionsRef = this.afs.list('boxes/'+nameBox+'/sections');
    return this.sectionsRef;
   }

   AddSection(section: Section,Box:Box){
    let date = new Date();
    let currentDate = date.toLocaleString();
    let formatDate = currentDate.replace(/[,]/, '');
    this.afs.object('boxes/'+Box.name+'/sections/'+section.name).set({
      id: this.afs.createPushId(),
      boxid:Box.name,
      name: section.name,
      dateCreated:formatDate,
      favorite: true,
      color: section.color,
    });
   }

   GetSection( sectionname:string){
    let b = this.getBoxTemp();
    this.sectionRef = this.afs.object('boxes/'+b.name+'/sections/'+sectionname);
    return this.boxRef;
   }

   DeleteSection(name:string){
    let b = this.getBoxTemp();
    this.sectionRef = this.afs.object('boxes/'+b.name+'/sections/'+name);
    this.sectionRef.remove();
   }

   UpdateSection(section:Section, newName:string){

    let b = this.getBoxTemp();
    this.DeleteSection(section.name);
    this.afs.object('boxes/'+b.name+'/sections/'+newName).set({
      id: section.id,
      boxid:b.name,
      name: newName,
      dateCreated:section.dateCreated,
      favorite: true,
      color: section.color,
   })

  }

  // Section CRUD - Item

  saveSection(section){
    this.sectionTemp = section;
   }

  getSectionTemp(){
    return this.sectionTemp;
   }

  getAllItems(){
    let b = this.getBoxTemp();
    let s = this.getSectionTemp();
    this.itemsRef = this.afs.list('boxes/'+b.name+'/sections/'+s.name+'/items');
    return this.itemsRef;
   }

   AddItem(item: Items) {
    let date = new Date();
    let currentDate = date.toLocaleString();
    let formatDate = currentDate.replace(/[,]/, '');
    let b = this.getBoxTemp();
    let s = this.getSectionTemp();
    console.log(item);
    this.afs.object('boxes/'+b.name+'/sections/'+s.name+'/items/'+item.name).set({
      id: this.afs.createPushId(),
      boxid:b.name,
      sectionid:s.name,
      name: item.name,
      dateCreated:formatDate,
      favorite: true,
      color: item.color,
      description: item.description,
      amount: item.amount,
      picture: item.picture
    });
  }

  deleteItem(name:string){
    let b = this.getBoxTemp();
    let s = this.getSectionTemp();
    this.itemRef = this.afs.object('boxes/'+b.name+'/sections/'+s.name+'/items/'+name);
    this.itemRef.remove();
  }

  UpdateItem(item:Items, newName:string){

    let b = this.getBoxTemp();
    let s = this.getSectionTemp();
    this.deleteItem(item.name);
    this.afs.object('boxes/'+b.name+'/sections/'+s.name+'/items/'+newName).set({
      id: item.id,
      boxid:b.name,
      sectionid:s.name,
      name: newName,
      dateCreated:item.dateCreated,
      favorite: true,
      color: item.color,
      description: item.description,
      amount: item.amount,
      picture: item.picture
   })

  }

}
