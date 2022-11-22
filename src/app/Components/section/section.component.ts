import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Box } from 'src/app/models/box';
import { Section } from 'src/app/models/section';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  boxList : Box[] = [];
  sectionList : Section[] = [];
  nameBox:string;
  public sectionForm: FormGroup;
  public editForm: FormGroup;

  exampleSection: Section = {
    id: '',
    boxId:'',
    color:'',
    dateCreated:'',
    favorite:true,
    name:''
  }
  constructor(private dataService: DataService,  private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.dataSet();

    let b= this.dataService.getBoxTemp();
    this.nameBox=b.name;
    let s =this.dataService.getAllSections(this.nameBox);;

    s.snapshotChanges().subscribe(data => {
      this.sectionList = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.sectionList.push(a as Section);
      })}
    )
    this.secForm();
    this.ediForm();
  }

  secForm(){
    this.sectionForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
    });
  }

  ediForm(){
    this.editForm = this.fb.group({
      name: [''],
      color: [''],
    })
  }

  dataSet(){
    let b = this.dataService.getBoxTemp();
    this.dataService.getAllSections(b.name).valueChanges().subscribe(data => {
      this.sectionList = data;
    })
  }

  ResetSectionForm(){
    this.sectionForm.reset();
  }

  ResetEditForm(){
    this.editForm.reset();
  }

  addSection(){
    let b=this.dataService.getBoxTemp();

    this.dataService.AddSection(this.sectionForm.value, b);
    this.sectionForm.reset();
  }



  datos(section){
    this.exampleSection = section;
    console.log(this.exampleSection.name);
  }

  deleteSection(){

    this.dataService.DeleteSection(this.exampleSection.name);
  }
  updateSection(){
    this.exampleSection.color = this.editForm.value.color;
    this.dataService.UpdateSection(this.exampleSection, this.editForm.value.name);
    this.editForm.reset();
  }


  saveTempSection(section){
    this.dataService.saveSection(section);
  }


}
