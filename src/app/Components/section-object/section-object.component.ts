import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Items } from 'src/app/models/items';

import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-section-object',
  templateUrl: './section-object.component.html',
  styleUrls: ['./section-object.component.css']
})
export class SectionObjectComponent implements OnInit {


  itemList: Items[]=[];



  exampleItem: Items = {
    id: '',
    boxId: '',
    sectionId: '',
    color: '',
    dateCreated: '',
    description: '',
    favourite: true,
    name: '',
    picture: '',
    amount:''
  }

  public itemForm: FormGroup;
  public editForm: FormGroup;

  constructor(private dataService: DataService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.dataSet();

    let s =this.dataService.getAllItems();;

    s.snapshotChanges().subscribe(data => {
      this.itemList = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.itemList.push(a as Items);
      })}
    );

    this.itmForm();
    this.ediForm();
  }

  itmForm(){
    this.itemForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      description: new FormControl(''),
      amount: new FormControl(''),
      picture: new FormControl('')
    });
  }

  ediForm(){
    this.editForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      amount: new FormControl(''),
    });
  }

  dataSet(){

    this.dataService.getAllItems().valueChanges().subscribe(data => {
      this.itemList = data;
    })
  }

  ResetItemForm(){
    this.itemForm.reset();
  }

  ResetEditForm(){
    this.editForm.reset();
  }

  addItem(){
    this.dataService.AddItem(this.itemForm.value);
    this.ResetItemForm();
  }


  updateItem(){
    this.exampleItem.color= this.editForm.value.color;
    this.exampleItem.amount= this.editForm.value.amount;
    this.dataService.UpdateItem(this.exampleItem, this.editForm.value.name);
    this.ResetEditForm();
  }

  deleteItem(){
    this.dataService.deleteItem(this.exampleItem.name);
  }

  datos(item){
    this.exampleItem = item;
    console.log(this.exampleItem);
  }
}
