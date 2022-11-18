import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Box } from 'src/app/models/box';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  public boxForm: FormGroup;

  boxList: Box[]=[];

  exampleBox: Box;

  constructor(private data: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataState();
    let s = this.data.getAllBoxes();
    s.snapshotChanges().subscribe(data => {
      this.boxList = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.boxList.push(a as Box);
      })
    })
    this.boForm();

  }

  dataState(){
    this.data.getAllBoxes().valueChanges().subscribe(data => {
      this.boxList = data;
    })
  }


  boForm(){
    this.boxForm = this.fb.group({
      name: [''],
      boxType: true,
      privateLink: [''],
    })
  }

  ResetForm(){
    this.boxForm.reset();
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
    this.ResetForm();
  }

  deleteBox(box){
    this.data.DeleteBox(box.$key);

  }

  datos(box){

    this.exampleBox = box;

  }

}
