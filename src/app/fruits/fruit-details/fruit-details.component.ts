import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/_models/fruit';
import { FruitsService } from 'src/app/_services/fruits.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent {
  fruit: Fruit | undefined;

  ngOnInit() {
    this.getDetailFruit()
  }

  constructor(private fruitService: FruitsService, private route: ActivatedRoute) { }

  getDetailFruit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.fruitService.getFruitById(id)
      .subscribe(response => this.fruit = response);
  }
}
