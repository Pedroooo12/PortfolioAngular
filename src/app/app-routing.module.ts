import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {
    title: 'Inicio',
    path: '',
    component: HomeComponent
  },
  {
    path: 'proyect',
    component: ProyectsComponent,
    loadChildren: () => import('./proyects/proyects.module').then(m => m.ProyectsModule) 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
