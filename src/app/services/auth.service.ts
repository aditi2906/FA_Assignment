import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  googlesignIn(){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${config.API_KEY}`)
  }
}
