import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  userList: AngularFireList<any>;


  constructor(public router:Router,public afAuth: AngularFireAuth, private firebase:AngularFireDatabase) { }



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

  login({email, password}:any ) {

      const result = this.afAuth.signInWithEmailAndPassword(email, password);
      return result


  }

  logout(){
    const result = this.afAuth.signOut();
    return result;
  }

  getCurrentUser(){
    this.afAuth.currentUser.then(user => {
      return user.uid;
    });
  }
}
