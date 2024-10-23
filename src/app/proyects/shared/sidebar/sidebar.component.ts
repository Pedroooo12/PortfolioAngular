import { Component, Input, OnInit } from '@angular/core';
import { NavigationProyect } from 'src/app/interfaces/navigationProyect';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() title!: string;

  @Input() description!: string;

  @Input() navigation!: NavigationProyect[];

  @Input() tecnologies!: Tecnology[];

  @Input() implementation?: Tecnology[];

  openMenu: boolean = false;

  activeSection: string = '';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
    this.openMenu = !this.openMenu;
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
