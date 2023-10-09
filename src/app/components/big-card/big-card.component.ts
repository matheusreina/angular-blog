import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  Id: string = '0';

  constructor() {}
  ngOnInit(): void {}
}
