import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user:any)
{
  return this.http.post<any>("http://localhost:3000/login", user)
  
}
constructor(private http:HttpClient) { }
}
