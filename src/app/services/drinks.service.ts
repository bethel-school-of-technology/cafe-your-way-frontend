import { Injectable } from '@angular/core';

import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
    drinks: Drink[] = [
      {
        id: 0,
        name: 'Cappuccino',
        price: 2.50
      },
      {
        id: 1,
        name: 'Hot Chocolate',
        price: 2.00
      },
      {
        id: 2,
        name: 'Hot Tea',
        price: 1.50
      }
    ];
  static drinks: Drink[];
  constructor() { }
}
