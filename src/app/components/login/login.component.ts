import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/models/login.interface';
import { BaeService } from 'src/app/servicios/bae.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private User: FormBuilder, private api: BaeService, private router: Router){

  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      this.router.navigate(['/user']);
    }
  }

  hide: boolean = true;

  usuarioLog = this.User.group({
    'email': ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    'password': ['', [Validators.required, Validators.minLength(7)]]
  })

  validation_messages = {
    email: {
      error: 'Debes ingresar un email valido'
    },
    password: {
      required: 'Debes ingresar el password',
      minLength: 'El password contiene al menos 7 caracteres'
    }
  }

  login(user: FormGroup): void{
    try {
      let userLogin: LoginI = {
        email: user.value.email,
        password: user.value.password
      }
      this.api.loginApi(userLogin).subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/user']);
        console.log(data);
      })
    } catch (error) {
      console.log('HUBO UN ERROR');
      console.log(error);
    }
  }

}
