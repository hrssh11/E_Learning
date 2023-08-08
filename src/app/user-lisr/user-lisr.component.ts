import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-lisr',
  templateUrl: './user-lisr.component.html',
  styleUrls: ['./user-lisr.component.css']
})
export class UserLisrComponent  implements OnInit{
  userData:any
  dataSource :any
  displayedColumns:string[] =['id' , 'name' , 'email' , 'role' , 'status' ,'' ]
  constructor(private userService : AuthService){
  }
  ngOnInit(): void {
    this.loadUser();
  }
 loadUser(){
  this.userService.getAll().subscribe(res=>{
    this.userData = res;
  })
 }

}
