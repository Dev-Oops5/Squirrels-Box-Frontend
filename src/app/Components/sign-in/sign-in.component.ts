import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [  ],
})

export class SignInComponent{

  @Input() error!: string|null;
  @Output() submitEM = new EventEmitter();

  constructor( private router: Router, private userService: UserService){

  }


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  submit() {
    if (this.form.valid) {
      this.userService.login(this.form.value).then((res) => {
        alert('Inicio de sesión exitoso')
        this.router.navigate(['/Box']);
      })
      .catch((err) => {
        console.log(err.message);
        this.router.navigate(['/SignIn']);
      });
    }


  }
}
