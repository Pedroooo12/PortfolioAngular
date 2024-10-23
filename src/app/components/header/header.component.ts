import { Component, OnInit } from '@angular/core';
import { ItemMenu } from 'src/app/interfaces/itemMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: ItemMenu[] = [
    {
      name: "Inicio",
      route: ""
    },
    {
      name: "Sobre mi",
      route: ""
    },
    {
      name: "Habilidades",
      route: ""
    },
    {
      name: "Tecnologías",
      route: ""
    },
    {
      name: "Portfolio",
      route: ""
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
