import { Routes, RouterModule } from '@angular/router';


import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



const routes: Routes = [

    { path: 'menu', component: ShoppingCartComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
