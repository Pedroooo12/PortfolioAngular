import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { 
  }

  ngOnInit() {
  }

  startAOS(){
    AOS.init({
      disable: 'mobile',
      mirror: true
    });
  }

  ngAfterViewInit(): void {
    this.startAOS();
    AOS.refresh();
  } 


}
