import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input() images!: string [];

  currentIndex: number = 1;

  constructor() { }

  ngOnInit() {
  }

  changePhotoAfter() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  changePhotoBefore() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
