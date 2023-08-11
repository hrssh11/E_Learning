import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck{
  title = 'shop4less';
  // clickmeactive:boolean =false;
  // subscription:Subscription;
  isMenuTabsRequired:boolean  
  constructor( private route :Router){
  }
  ngOnInit(): void {

  }

  ngDoCheck(): void {
    let currentUrl = this.route.url

    if(currentUrl == '/login' || currentUrl == '/register'){
      this.isMenuTabsRequired = false
    }else{
      this.isMenuTabsRequired = true
    }
  }
}
