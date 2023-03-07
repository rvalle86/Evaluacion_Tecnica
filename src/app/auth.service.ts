import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
API_URL = 'https://fragrant-firefly-2123.fly.dev'
  login(data: LoginRequest){
    return this.http.post<LoginResponse>(this.API_URL+'/auth/login', data)
  }

  constructor(private http:HttpClient) { 


  }
}

export interface LoginRequest{
  email: string,
  password: string
}

export interface LoginResponse{
data:{
  token?: string,
  user?: User
}
}

export interface User{
  authorities: Role[],
  role: number
}

export interface Role{
  authorities: string
}
