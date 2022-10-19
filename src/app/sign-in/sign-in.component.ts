import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent{

  @Input() error!: string|null;
  @Output() submitEM = new EventEmitter();

  

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  /* TODO: CREAR CARPETA DE SERVICIOS PARA INICIAR SESIÓN */
  submit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);


    }
  }
}
