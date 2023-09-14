import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { registerI } from '../models/register.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resposeRegisterI } from '../models/responceRegister.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaeService {

  constructor( private http: HttpClient ) { }

  url:string = 'http://localhost:3001/';

  loginApi( form: LoginI ){
    let direction = this.url + '';
  }

  registerApi( form: registerI ): Observable<resposeRegisterI> {
    let direction = this.url + 'usuario/registro';
    
    return this.http.post<resposeRegisterI>(direction, form);
  }
}
