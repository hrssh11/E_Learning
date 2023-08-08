import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './testing/component1/component1.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserLisrComponent } from './user-lisr/user-lisr.component';
import { AuthGaurd } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AuthGaurd] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserLisrComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) , canActivate:[AuthGaurd] },
  { path: 'custom', component: Component1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
