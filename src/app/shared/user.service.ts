import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'
//}
)
export class UserService {
  readonly rootUrl = 'http://localhost:3000'
  constructor(private http : HttpClient) { }

  registerUser(user : User){
    console.log("register user");
    const body : User = {
      UserName : user.UserName,
      Password : user.Password,
      Email : user.Email,
      FirstName : user.FirstName,
      LastName : user.LastName
    }
    
    return this.http.post(this.rootUrl + '/users', body);
  }
  userAuthentication(userName, password){
    // request web api for token
    var data = "?UserName="+userName+"&Password="+password;
    var httpParams = new HttpParams().set('UserName', userName);
    httpParams.append('Password', password);
    var requestHeader = new HttpHeaders({'Content-Type' : 'application/x-www-urlencoded'});
    //return this.http.post(this.rootUrl + '/users', data, {headers:requestHeader});
    return this.http.get(this.rootUrl + '/users',{headers:requestHeader, params:httpParams});
  }

}
