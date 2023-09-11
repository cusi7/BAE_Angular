import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private User: FormBuilder){

  }

  hide: boolean = true;

  usuarioLog = this.User.group({
    'name': ['', [Validators.required, Validators.minLength(2)]],
    'password': ['', [Validators.required, Validators.minLength(7)]]
  })

  validation_messages = {
    name: {
      required: 'Debes ingresar el nombre',
      minLength: 'El nombre contiene al menos 2 caracteres'
    },
    password: {
      required: 'Debes ingresar el password',
      minLength: 'El password contiene al menos 7 caracteres'
    }
  }

  login(user: FormGroup){
    console.log(user.value);
  }
}
