import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { User } from './user.model';

@Injectable(//{
  //providedIn: 'root'
//}
)
export class UserService {
  readonly rootUrl = 'http://localhost:4300'
  constructor(private http : HttpClient) { }

  registerUser(user : User){
    console.log("In angular service -> registerUser")
    const body : User = {
      UserName : user.UserName,
      Password : user.Password,
      Email : user.Email,
      FirstName : user.FirstName,
      LastName : user.LastName
    }
    console.log(body);
    console.log(this.rootUrl + '/api/registerUser');
    return this.http.post(this.rootUrl + '/api/registerUser', body);
  }

}
