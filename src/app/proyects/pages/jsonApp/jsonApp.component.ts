import { Component, OnInit } from '@angular/core';
import { NavigationProyect } from 'src/app/interfaces/navigationProyect';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-jsonApp',
  templateUrl: './jsonApp.component.html',
  styleUrls: ['./jsonApp.component.css']
})
export class JsonAppComponent implements OnInit {

  navigation: NavigationProyect[] = [
    {
      name: "Página principal",
      url: "main"
    },
    {
      name: "Funcionalidades",
      url: "funcionalidades"
    },
  ];

  tecnologies: Tecnology[] = [
    {
      name: "#Angular16",
      color: "bg-red-600"
    },
    {
      name: "#Tailwind",
      color: "bg-purple-700"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
