import { Component, OnInit } from '@angular/core';
import { Pastry } from '../models/pastry';
import { PastriesService } from '../services/pastries.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.css']
})
export class PastriesComponent implements OnInit {
  pastries: Pastry[];
  constructor(private pastriesService: PastriesService) {
    this.pastries = pastriesService.pastries;
   }

  ngOnInit(): void {
  }

}
