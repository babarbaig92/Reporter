import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const body : User = {
      UserName : user.UserName,
      Password : user.Password,
      Email : user.Email,
      FirstName : user.FirstName,
      LastName : user.LastName
    }
    return this.http.post(this.rootUrl + '/api/registerUser', body);
  }
  userAuthentication(userName, password){
    // request web api for token
    var data = "username="+userName+"&password="+password+"&grant_type=password";
    var requestHeader = new HttpHeaders({'Content-Type' : 'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl + '/token', data, {headers:requestHeader});

  }

}
