import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Caldo Gallego", "El caldo gallego es uno de los platos más conocidos de la gastronomía galaica. Se trata de un potaje resultado de cocer grelos o nabizas (la hoja del nabo), alubias y patatas en una olla, a veces con algo de carne.", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Caldo_galego%2C_Galiza.jpg"),
    new Recipe("Cocido Madrileño", "El cocido madrileño es uno de los platos más representativos de la cocina de Madrid.1​ Consiste en un guiso cuyo ingrediente principal son los garbanzos y los secundarios, aunque con gran protagonismo, diversas verduras, carnes y tocino de cerdo con algún embutido.", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/CocidoMadrile%C3%B1o.jpg/1280px-CocidoMadrile%C3%B1o.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
