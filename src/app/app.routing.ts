import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MenuComponent } from './menu';
import { CheckoutComponent } from './checkout';
import { SignupComponent } from './signup';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: MenuComponent },
    { path: 'register', component: CheckoutComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
