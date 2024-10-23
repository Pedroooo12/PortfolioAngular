import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() title!: string;

  @Input() description!: string;

  @Input() course?: string;

  constructor() { }

  ngOnInit() {
  }

}
