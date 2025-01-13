import { Component, OnInit } from '@angular/core';
import { Tecnology } from 'src/app/interfaces/tecnology';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  tecnologiesTodo: Tecnology[] = [
    {
      name: "#Angular16",
      color: "bg-red-600"
    },
    {
      name: "#Tailwind",
      color: "bg-purple-700"
    },
    {
      name: "#Springboot",
      color: "bg-green-700"
    },
    {
      name: "#MySQL",
      color: "bg-orange-700"
    }
  ];

  tecnologiesJson: Tecnology[] = [
    {
      name: "#Angular16",
      color: "bg-red-600"
    },
    {
      name: "#Tailwind",
      color: "bg-purple-700"
    }
  ];

  tecnologiesCocktail: Tecnology[] = [
    {
      name: "#Angular19",
      color: "bg-red-700"
    },
    {
      name: "#Tailwind",
      color: "bg-purple-700"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
