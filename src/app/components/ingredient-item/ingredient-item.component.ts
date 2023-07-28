import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from './ingredient.type';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent {

  @Input() ingredient: Ingredient = {
    name: '',
    img: '',
    id: 0
  }

  type = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  goToDetail(id: number){
    this.route.params.subscribe(params => {

      // Access individual parameters like this:
      const type = params['type'];
      console.log('type:', type);
      this.type = type

    })

    this.router.navigate(['detail', id, 'type', this.type === 'ingredient' ? 'drink' : 'ingredient' ])

  }

}
