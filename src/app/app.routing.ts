import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MenuComponent } from './menu';
import { CheckoutComponent } from './checkout';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';
import { CartComponent } from './cart';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'register', component: CheckoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: 'cart', component: CartComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
