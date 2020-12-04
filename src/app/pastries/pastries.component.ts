import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.css']
})
export class PastriesComponent implements OnInit {
  pastries = ['Chocolate Brioche', 'Blueberry Muffin', 'Donut'];
  constructor() { }

  ngOnInit(): void {
  }

}
