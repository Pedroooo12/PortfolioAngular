import { Component, Input, OnInit } from '@angular/core';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  @Input() title!: string;

  @Input() description!: string;
  @Input() href_url!: string;
  @Input() href_proyect!: string;
  @Input() image!: string;
  @Input() href_github!: string;
  @Input() tecnologies!: Tecnology[];

  constructor() { }

  ngOnInit() {
  }

}
