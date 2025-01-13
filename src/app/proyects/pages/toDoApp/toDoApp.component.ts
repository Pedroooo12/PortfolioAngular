import { Component, OnInit } from '@angular/core';
import { NavigationProyect } from 'src/app/interfaces/navigationProyect';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-toDoApp',
  templateUrl: './toDoApp.component.html',
  styleUrls: ['./toDoApp.component.css']
})
export class ToDoAppComponent implements OnInit {

  navigation: NavigationProyect[] = [
    {
      name: "Sistema login",
      url: "login"
    },
    {
      name: "Crud Categorías",
      url: "crudCategorias"
    },
    {
      name: "Crud tareas",
      url: "crudTareas"
    },
    {
      name: "Funcionalidades",
      url: "funcionalidades"
    },
    {
      name: "Calendario y Estadísticas",
      url: "calendario_estadisticas"
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

  implementation: Tecnology[] = [
    {
      name: "#ChartJS",
      color: "bg-blue-700"
    },
    {
      name: "#Angular Material",
      color: "bg-yellow-700"
    }
  ]

  constructor() { 
  }

  ngOnInit() {
  }


}
