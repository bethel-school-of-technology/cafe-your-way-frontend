import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class PastriesComponent implements OnInit {
  drinks: Drink[];
  constructor(private drinksService: DrinksService) {
    this.drinks = drinksService.drinks;
   }

  ngOnInit(): void {
  }

}
