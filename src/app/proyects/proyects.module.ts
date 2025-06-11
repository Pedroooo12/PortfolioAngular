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
import { RouterModule } from '@angular/router';
import { CocktailAppComponent } from './pages/cocktailApp/cocktailApp.component';
import { IntroductionComponent } from './components-cocktail/introduction/introduction.component';
import { SectionMainCocktailComponent } from './components-cocktail/section-main-cocktail/section-main-cocktail.component';
import { SectionNameCocktailComponent } from './components-cocktail/section-name-cocktail/section-name-cocktail.component';
import { SectionServicesCocktailComponent } from './components-cocktail/section-services-cocktail/section-services-cocktail.component';
import { SectionAlcoholCocktailComponent } from './components-cocktail/section-alcohol-cocktail/section-alcohol-cocktail.component';
import { SectionIngredientCocktailComponent } from './components-cocktail/section-ingredient-cocktail/section-ingredient-cocktail.component';
import { SectionGlassCocktailComponent } from './components-cocktail/section-glass-cocktail/section-glass-cocktail.component';
import { SectionRandomCocktailComponent } from './components-cocktail/section-random-cocktail/section-random-cocktail.component';
import { SectionDrinkCocktailComponent } from './components-cocktail/section-drink-cocktail/section-drink-cocktail.component';
import { SectionIntegrationCocktailComponent } from './components-cocktail/section-integration-cocktail/section-integration-cocktail.component';
import { RrhhAppComponent } from './pages/rrhhApp/rrhhApp.component';
import { SectionLoginRrhhComponent } from './components-rrhh/section-login-rrhh/section-login-rrhh.component';
import { SectionAdminPanelComponent } from './components-rrhh/section-admin-panel/section-admin-panel.component';
import { SectionAdminCreateUserComponent } from './components-rrhh/section-admin-create-user/section-admin-create-user.component';
import { SectionListEmployeesRrhhComponent } from './components-rrhh/section-list-employees-rrhh/section-list-employees-rrhh.component';
import { SectionAssistsRrhhComponent } from './components-rrhh/section-assists-rrhh/section-assists-rrhh.component';
import { SectionUserRrhhComponent } from './components-rrhh/section-user-rrhh/section-user-rrhh.component';

@NgModule({
  imports: [
    CommonModule,
    ProyectsRoutes,
    RouterModule
  ],
  declarations: [
    IntroductionComponent,
    SectionMainCocktailComponent,
    SectionNameCocktailComponent,
    SectionServicesCocktailComponent,
    SectionAlcoholCocktailComponent,
    SectionIngredientCocktailComponent,
    SectionGlassCocktailComponent,
    SectionRandomCocktailComponent,
    SectionDrinkCocktailComponent,
    SectionIntegrationCocktailComponent,
    CocktailAppComponent,
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
    SectionFunctionalitiesComponent,
    RrhhAppComponent,
    SectionLoginRrhhComponent,
    SectionAdminPanelComponent,
    SectionAdminCreateUserComponent,
    SectionListEmployeesRrhhComponent,
    SectionAssistsRrhhComponent,
    SectionUserRrhhComponent
  ]
})
export class ProyectsModule { }
