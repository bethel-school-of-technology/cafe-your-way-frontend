import { Injectable } from '@angular/core';
import { Pastry } from '../models/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastriesService {
    pastries: Pastry[] = [
      {
        id: 3,
        name: 'Blueberry Muffin',
        price: 2.50
      },
      {
        id: 4,
        name: 'Crossiant',
        price: 3.00
      },
      {
        id: 5,
        name: 'Doughnut',
        price: 2.00
      }
    ];
  constructor() { }
}
