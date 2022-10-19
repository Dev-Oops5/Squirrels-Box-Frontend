import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  @Input() error1!: string|null;
  @Output() submitEM1 = new EventEmitter();

  ngOnInit(): void {

  }

  constructor(public router:Router){

  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  /* TODO: CREAR CARPETA DE SERVICIOS PARA EL REGISTRO */
  submit() {
    if (this.form.valid) {
      //this.submitEM1.emit(this.form.value);
      this.router.navigate(['/SignIn'])
    }
  }

}
