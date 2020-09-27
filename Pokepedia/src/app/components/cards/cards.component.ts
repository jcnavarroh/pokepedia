import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  versiones = [{ nombre: 'version 1', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 2', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 3', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 4', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 5', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 6', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 7', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' }]

  constructor() { }

  ngOnInit(): void {
  }

}
