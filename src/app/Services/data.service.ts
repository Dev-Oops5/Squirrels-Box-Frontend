import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  boxesRef: AngularFireList<any>;
  sectionRef: AngularFireList<any>;
  boxRef: AngularFireObject<any>;


  constructor(private afs: AngularFireDatabase) {

   }


   // Section CRUD - BOX

   getAllBoxes(){
    this.boxesRef = this.afs.list('boxes');
    return this.boxesRef;
   }

   AddBox(box: Box){

    let date = new Date();
    let boxRef = this.boxesRef.push({
      name: box.name,
      boxType: box.boxType,
      dateCreated:  date.toString(),
      download: true,
      favorite: true,
      privateLink: box.privateLink,
      sections: [],
    })

    let boxId =boxRef.key;

    boxRef.update({
      id: boxId,
    })

   }

   GetBox(id:string){
    this.boxRef = this.afs.object('boxes/'+id);
    return this.boxRef;
   }

   UpdateBox(box:Box){



    let boxRef = this.GetBox(box.id);

    boxRef.update({
      name: box.name,
      boxType: box.boxType,
      privateLink: box.privateLink,
    })

   }

   DeleteBox(id:string){
    this.boxRef = this.afs.object('boxes/'+id);
    this.boxRef.remove();
   }

}
