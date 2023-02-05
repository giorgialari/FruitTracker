import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/_models/fruit';
import { FruitsService } from 'src/app/_services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: Fruit [] = [];
  searchFruits: any;

  ngOnInit(){
    this.getFruits()
  }

  constructor(private fruitService: FruitsService){}
  getFruits() {
  this.fruitService.getFruit().subscribe(response => this.fruits = response);

}

}
