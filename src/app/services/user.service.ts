import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: Users;

  constructor(private http: HttpClient) { }

  saveUser(user: Users): Observable<any> {
    const url = "http://localhost:8080/saveOne";
    return this.http.post(url, user);
  }
}
