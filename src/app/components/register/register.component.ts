import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private theUser: FormBuilder){
    this.usuarioReg.get('repPassword')?.setValidators(
      this.equals(this.usuarioReg.get('password'), this.usuarioReg.get('repPassword') )
    )
  }

  equals(pass: any, repPass: any): any {
    if(pass === repPass) return null
    else return false;
  }

  usuarioReg = this.theUser.group({
    'name': ['', [Validators.required, Validators.minLength(2)]],
    'email': ['', [Validators.required, Validators.email]],
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

  register(user: FormGroup): void{
    console.log(user.value);
  }

}
