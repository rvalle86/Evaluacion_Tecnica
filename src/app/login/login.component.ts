import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService, private router:Router){

  }

  errorMessage?: string

  loginRequest:LoginRequest = {email:'', password:''}

  login(){
    this.authService.login(this.loginRequest)
    .subscribe(({data})=> {
      if(data.token){
        sessionStorage.setItem('token', data.token)
        this.router.navigate(['inicio'])
        return
      }
      this.errorMessage = 'Credenciales incorrectas'
    })
  }
}
