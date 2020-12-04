import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { MenuComponent } from './menu';
import { SignupComponent } from './signup';
import { CheckoutComponent } from './checkout';
import { LoginComponent } from './login';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
