import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { SidebarSocialMediaComponent } from './components/sidebarSocialMedia/sidebarSocialMedia.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './shared/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectComponent } from './shared/proyect/proyect.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    SidebarSocialMediaComponent,
    SkillsComponent,
    SkillComponent,
    PortfolioComponent,
    ProyectComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
