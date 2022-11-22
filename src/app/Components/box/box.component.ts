import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Box } from 'src/app/models/box';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  public boxForm: FormGroup;

  public editForm: FormGroup;

  boxList: Box[]=[];
  boxList1: Box[]=[];
  exampleBox: Box ={
    id: '',
    download:true,
    favorite:true,
    name:'',
    privateLink:'',
    boxType:true,
    author:'',
    description:''
  };

  constructor(private data: DataService, private fb: FormBuilder, private userService: UserService) {

  }

  ngOnInit(): void {
    this.dataState();
    this.userService.comprobarAutentificación();
    let s = this.data.getAllBoxes();
    this.userService.getCurrentUser().then((user) => {
      console.log(user);
      s.snapshotChanges().subscribe(data => {
        this.boxList = [];
        data.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          if(a['author'] === user.email){
            console.log(a);
            this.boxList.push(a as Box);
          }
        })
      });
    });

    this.boForm();
    this.ediForm();

  }


  dataState(){
    this.data.getAllBoxes().valueChanges().subscribe(data => {
      this.boxList1 = data;
    })
  }


  boForm(){
    this.boxForm = this.fb.group({
      name: [''],
      boxType: true,
      privateLink: [''],
    })
  }

  ediForm(){
    this.editForm = this.fb.group({
      id: [''],
      name1: [''],
      boxType1: true,
      privateLink1: [''],
    })
  }

  saveTempBox(box){

    this.data.saveBox(box);
  }

  ResetBoxForm(){
    this.boxForm.reset();
  }

  ResetEditForm(){
    this.editForm.reset();
  }

  get Name(){
    return this.boxForm.get('name');
  }

  get BoxType(){
    return this.boxForm.get('boxType');
  }

  get PrivateLink(){
    return this.boxForm.get('privateLink');
  }

  subitBoxData(){
    this.data.AddBox(this.boxForm.value);
    this.ResetBoxForm();
  }

  updateBox(){

    this.exampleBox.boxType = this.editForm.value.boxType1;
    this.exampleBox.privateLink = this.editForm.value.privateLink1;
    this.data.UpdateBox(this.exampleBox,this.editForm.value.name1);
    this.ResetEditForm();
  }

  deleteBox(){
    this.data.DeleteBox(this.exampleBox.name);
  }

  datos(box){
    this.exampleBox = box;

  }

}
