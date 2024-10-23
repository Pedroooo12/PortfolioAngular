import { SectionTareasComponent } from './components-toDo/sectionTareas/sectionTareas.component';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectsComponent } from './proyects.component';
import { ProyectsRoutes } from './proyects.routing';
import { ToDoAppComponent } from './pages/toDoApp/toDoApp.component';
import { BtnBackComponent } from './shared/btnBack/btnBack.component';
import { SectionCategoriesComponent } from './components-toDo/sectionCategories/sectionCategories.component';
import { SectionLoginComponent } from './components-toDo/sectionLogin/sectionLogin.component';
import { SectionFunctionalityComponent } from './components-toDo/sectionFunctionality/sectionFunctionality.component';
import { SectionCalendaryStatisticsComponent } from './components-toDo/sectionCalendaryStatistics/sectionCalendaryStatistics.component';
import { JsonAppComponent } from './pages/jsonApp/jsonApp.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SectionMainJsonComponent } from './components-json/sectionMainJson/sectionMainJson.component';
import { SectionFunctionalitiesComponent } from './components-json/sectionFunctionalities/sectionFunctionalities.component';

@NgModule({
  imports: [
    CommonModule,
    ProyectsRoutes,

  ],
  declarations: [
    ProyectsComponent, 
    ToDoAppComponent,
    BtnBackComponent,
    CarrouselComponent,
    SectionCategoriesComponent,
    SectionLoginComponent,
    SectionTareasComponent,
    SectionFunctionalityComponent,
    SectionCalendaryStatisticsComponent,
    JsonAppComponent,
    SidebarComponent,
    SectionMainJsonComponent,
    SectionFunctionalitiesComponent
  ]
})
export class ProyectsModule { }
