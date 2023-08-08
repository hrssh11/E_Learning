import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {
  registerForm
  constructor(public frombulider: FormBuilder , private toastr: ToastrService ,private userapi : AuthService , private route:Router ){
  }


  ngOnInit(): void {
    this.registerForm = this.frombulider.group({
      id:['',[Validators.required , Validators.minLength(5)]],
      name:['' ,[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required , Validators.email ]],
      gender:['Male',[Validators.required]],
      role:[''],
      isActive:[false]
    })
  }

  onsubmitClick(){
    console.log('hdd', this.registerForm.value)
    if(this.registerForm.valid){
      this.userapi.registesData(this.registerForm.value).subscribe(res=>{
         this.toastr.success('Please Contact Adminn for enbale to access user ' , 'Registration Succesfull')
         this.route.navigate(['login'])
      })
    }else{
      this.toastr.warning('Please Enter Valid Data')
    }
  }
}
