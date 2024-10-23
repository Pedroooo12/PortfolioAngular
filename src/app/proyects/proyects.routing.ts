import { Routes, RouterModule } from '@angular/router';
import { ToDoAppComponent } from './pages/toDoApp/toDoApp.component';
import { ProyectsComponent } from './proyects.component';
import { JsonAppComponent } from './pages/jsonApp/jsonApp.component';

const routes: Routes = [
  { 
    path: '',
    component: ProyectsComponent,
    children: [
      {
        path: 'to-do',
        component: ToDoAppComponent
      },
      {
        path: 'json-app',
        component: JsonAppComponent
      }
    ]
  },
];

export const ProyectsRoutes = RouterModule.forChild(routes);
