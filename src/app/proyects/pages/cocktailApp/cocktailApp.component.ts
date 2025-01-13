import { Component, OnInit } from '@angular/core';
import { NavigationProyect } from 'src/app/interfaces/navigationProyect';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-cocktailApp',
  templateUrl: './cocktailApp.component.html',
  styleUrls: ['./cocktailApp.component.css'],
})
export class CocktailAppComponent implements OnInit {
  
  navigation: NavigationProyect[] = [
    {
      name: 'Introducción',
      url: 'introduccion',
    },
    {
      name: 'Servicios',
      url: 'services'
    },
    {
      name: 'Página principal',
      url: 'principal',
    },
    {
      name: 'Nombre',
      url: 'name'
    },
    {
      name: 'Ingrediente',
      url: 'ingredient'
    },
    {
      name: 'Vaso',
      url: 'glass'
    },
    {
      name: 'Aleatorio',
      url: 'random',
    },
    {
      name: 'Bebida',
      url: 'drink'
    },
    {
      name: 'Integraciones',
      url: 'integration'
    }
  ];

  tecnologies: Tecnology[] = [
    {
      name: '#Angular19',
      color: 'bg-red-700',
    },
    {
      name: '#Tailwind',
      color: 'bg-purple-700',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
