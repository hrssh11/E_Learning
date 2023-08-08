import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// interface userdata{
//   id:any
//   password:any
// }
export class LoginComponent implements OnInit {
  loginFrom !: FormGroup
  userdata: any
  constructor(private formbuilder: FormBuilder, private toast: ToastrService, private userapi: AuthService, private route: Router) {
    sessionStorage.clear()
  }

  ngOnInit(): void {
    this.loginFrom = this.formbuilder.group({
      id: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLoginSubmit() {
    console.log(this.loginFrom.value)
    if (this.loginFrom.valid) {
      this.userapi.getById(this.loginFrom.value.id).subscribe(res => {
        this.userdata = res;
        console.log("user data", this.userdata)
        if (this.userdata.password === this.loginFrom.value.password) {
          if (this.userdata.isActive) {
            sessionStorage.setItem('id', this.userdata.id)
            sessionStorage.setItem('role', this.userdata.role)
            this.toast.success('Login Successfully')
            setTimeout(() => {
              this.route.navigate([''])
            }, 1000);

          } else {
            this.toast.error('Please Contact To Admin! "Inactive User!!" ')
          }
        } else {
          this.toast.error('Invalid Credentials')
        }
      }, (error) => {
        this.toast.error('Something Went Wrong')
      })
    }
    else {
      this.toast.warning('Please Enter Valid Details ')
    }
  }
}
