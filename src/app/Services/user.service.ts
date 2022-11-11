import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { first } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  userList: AngularFireList<any>;


  constructor(public afAuth: AngularFireAuth, private firebase:AngularFireDatabase) { }



  register(user: User){

    try{

      const result = this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.insertUser(user);


      //console.log(id);

      return 'Registro exitoso';

    }catch(e){
      console.log(e.message);
      return 'Registro fallido';
    }

  }

  insertUser(user: User){{
    console.log(user);
    this.userList = this.firebase.list('users');
    if(user){
      this.userList.push({
        username: user.username,
        email: user.email,
        birthday: user.birthday,
        password: user.password
       });
     }
    }
  }

  login(email:string,password: string):any {
    try{

      const result = this.afAuth.signInWithEmailAndPassword(email, password);
      console.log("Inicio de sesión exitoso");
      return result;

    } catch(e){
      console.log(e);
      return;
    }


  }


  getCurrentUser(){
    this.afAuth.currentUser.then(user => {
      return user.uid;
    });
  }
}
