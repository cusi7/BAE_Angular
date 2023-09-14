import { Component, OnInit } from '@angular/core';
//angular
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';
//servicios
import { BaeService } from 'src/app/servicios/bae.service';
//interfaces
import { registerI } from 'src/app/models/register.interface';
import { resposeRegisterI } from 'src/app/models/responceRegister.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( //public dialog:MatDialog,
     private theUser: FormBuilder, private api:BaeService, private router: Router){
    
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      this.router.navigate(['/user']);
    }
  }
  
  
  hide:boolean =true;
  hideRepeat: boolean = true;

  usuarioReg = this.theUser.group({
    'name': ['', [Validators.required, Validators.minLength(2)]],
    'email': ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    'password': ['', [Validators.required, Validators.minLength(7)]],
    'repPassword': ['', Validators.required]
  })

  validation_messages = {
    name: 
      {
        required: 'Debes ingresar un nombre',
        minLength: 'El nombre debe tener mas de dos caracteres'
      },
    email: 
      {
        error: 'Debes ingresar un email valido'
      },
    password: 
      {
        required: 'Debes ingresar un password',
        minLength: 'El password debe contener al menos 7 caracteres'
      },
    repPassword:
      {
        required: 'Debes reingresar el password',
        different: 'Debes ingresar el mismo password'
      }
  }

  // openDialog(){
  //   this.dialog.open(MessageComponent,{
  //     width:'250px'
  //   })
  // }

  register(user: FormGroup): void{
     let userRegister: registerI = {
      name: user.value.name,
      email: user.value.email,
      password: user.value.password
     };
     try {
        this.api.registerApi(userRegister).subscribe(data=> {
          let response:resposeRegisterI = data;
          localStorage.setItem('token', response.token);
          this.router.navigate(['/user']);
        });
     } catch (error) {
        console.log(error)
     }
  }
}
