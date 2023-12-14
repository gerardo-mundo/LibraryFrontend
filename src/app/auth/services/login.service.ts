import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private readonly BASE_URL = ENVIRONMENT.BASE_URL;

  public login() {
    
  }
}
