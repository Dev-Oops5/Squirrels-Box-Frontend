import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{



  @Input() error1!: string|null;
  @Output() submitEM1 = new EventEmitter();
  @Input() error!: string|null;


  user:User = new User();

  ngOnInit(): void {

  }

  constructor(public router:Router, private userService: UserService){

  }

  form1: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });


  submit() {
    if (this.form1.valid) {
      this.user=this.form1.value;
      this.userService.register(this.user);
      }
    }
  }



