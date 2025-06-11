import { Routes, RouterModule } from '@angular/router';
import { ToDoAppComponent } from './pages/toDoApp/toDoApp.component';
import { ProyectsComponent } from './proyects.component';
import { JsonAppComponent } from './pages/jsonApp/jsonApp.component';
import { CocktailAppComponent } from './pages/cocktailApp/cocktailApp.component';
import { RrhhAppComponent } from './pages/rrhhApp/rrhhApp.component';

const routes: Routes = [
  { 
    path: '',
    component: ProyectsComponent,
    children: [
      {
        title: 'ToDoApp',
        path: 'to-do',
        component: ToDoAppComponent
      },
      {
        title: 'JsonApp',
        path: 'json-app',
        component: JsonAppComponent
      },
      {
        title: 'CocktailApp',
        path: 'cocktail-app',
        component: CocktailAppComponent
      },
      {
        title: 'RRHHApp',
        path: 'rrhh-app',
        component: RrhhAppComponent
      }
    ]
  },
];

export const ProyectsRoutes = RouterModule.forChild(routes);
