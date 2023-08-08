import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }

  //return all data via get method 
  getAll() {
    return this.http.get(this.baseAPI);
  }

  //getData via id 
  getById(id: any) {
    return this.http.get(this.baseAPI + '/' + id);
  }

  //resgister form api 
  registesData(inputData: any) {
    return this.http.post(this.baseAPI, inputData);
  }
  //update user
  updateData(id: any, updateData: any) {
    return this.http.put(this.baseAPI + '/' + id, updateData)
  }

  //Get Username (id): hrssh1 (eg.)
  isLoggedin(){
    return sessionStorage.getItem('id')!=null;
  }
  //Get User Role 

  getUserRole(){
    return  sessionStorage.getItem('role')!=null? sessionStorage.getItem('role').toString():''
  }

}
