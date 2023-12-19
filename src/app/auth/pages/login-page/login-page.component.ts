import { Component, Injectable } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationStatus } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(private loginService: LoginService, 
              private fb: FormBuilder,
              private messageService: MessageService, 
              private router: Router) {}

  public isLoading: boolean = false;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\\d!@#$%^&*()-_+=]{7,}$")]]
    // errors: "pattern" e "email"
  })

  public onLogin() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    
    this.loginService.login(this.loginForm.value).subscribe({
      next: (success) => {
        this.isLoading = false;
        if(success) {
          this.loginService.isAuthenticated = AuthenticationStatus.authenticated;
          this.router.navigateByUrl("/dashboard/welcome");
        }       
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ups',
          detail: `${error}`,
        });

        this.isLoading = false;
      },
    });

  }
}
