import { Component, OnInit } from '@angular/core';
import { NavigationProyect } from 'src/app/interfaces/navigationProyect';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-rrhhApp',
  templateUrl: './rrhhApp.component.html',
  styleUrls: ['./rrhhApp.component.css']
})
export class RrhhAppComponent implements OnInit {

   navigation: NavigationProyect[] = [
      {
        name: "Inicio de sesión",
        url: "main"
      },
      {
        name: "Panel administrador",
        url: "funcionalidades"
      },
      {
        name: "Ajustes administrador",
        url: "funcionalidades"
      },
      {
        name: "Creación empleados",
        url: "funcionalidades"
      },
      {
        name: "Listado empleados",
        url: "funcionalidades"
      },
      {
        name: "Listado salarios",
        url: "funcionalidades"
      },
      {
        name: "Listados asistencias",
        url: "funcionalidades"
      },
      {
        name: "Panel usuario",
        url: "funcionalidades"
      }
    ];
  
    tecnologies: Tecnology[] = [
      {
        name: "#Angular16",
        color: "bg-red-600"
      },
      {
        name: "#Tailwind",
        color: "bg-purple-700"
      },
      {
        name: "#Springboot",
        color: "bg-green-700"
      },
      {
        name: "#MySQL",
        color: "bg-orange-700"
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
