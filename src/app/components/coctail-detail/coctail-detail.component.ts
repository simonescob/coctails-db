import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoctailsService } from 'src/app/services/coctails.service';
import { Ingredient } from '../ingredient-item/ingredient.type';

@Component({
  selector: 'app-coctail-detail',
  templateUrl: './coctail-detail.component.html',
  styleUrls: ['./coctail-detail.component.scss']
})
export class CoctailDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private coctailService: CoctailsService,
  ) { }

  assets = 'assets/images/'

  details: any = {
    name: '',
    img: ''
  }

  type = ""

  ingredients: Ingredient[] = [
    {
      id: 0,
      name: 'Azucarrr',
      img: this.assets + '14 cup Sugar.png'
    },
    {
      id: 0,
      name: 'Huevos',
      img: this.assets + '6 Egg Yolk.png'
    },
    {
      id: 0,
      name: 'Vainilla',
      img: this.assets + '1 tsp Vanilla extract.png'
    },
    {
      id: 0,
      name: 'Azucarrr',
      img: this.assets + '14 cup Sugar.png'
    },
    {
      id: 0,
      name: 'Azucarrr',
      img: this.assets + '14 cup Sugar.png'
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access individual parameters like this:
      const id = params['id'];
      const type = params['type'];

      // Do whatever you need to do with the parameters
      console.log('id:', id);
      console.log('type:', type);

      this.type = type;

      if(type === 'drink'){
        this.coctailService.getDrinkDetail(id).subscribe((coctail: any) => {
          let coctailIem = coctail.drinks[0];

          console.log('coctail:', coctailIem);

          this.details.name = coctailIem.strDrink;
          this.details.img = coctailIem.strDrinkThumb;

          // Function to check if a string contains the substring "strIngredient"
          const containsStrIngredient = (key: string): boolean => {
            return key.includes("strIngredient");
          };

          // Get all keys that start with or contain "strIngredient"
          const ingredientKeys = Object.keys(coctailIem).filter(containsStrIngredient);

          // Extract the values corresponding to the ingredient keys
          const ingredients: (string | null)[] = ingredientKeys.map((key) => coctailIem[key]);

          console.log('new array', ingredients);

          // this.coctailService.getIngredientName()
          ingredients.forEach((ingredient: any, index: number) => {
            if(ingredient !== null){
              this.ingredients[index].name = ingredient;
              this.ingredients[index].img = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`;
              this.coctailService.getIngredientName(ingredient).subscribe((name: any) => {
                this.ingredients[index].id = name.ingredients[0].idIngredient
              })
            }
          });

        })
      }else{
        this.coctailService.getIngredientDetail(id).subscribe((ingredient: any) => {
          console.log('ingredient:', ingredient);

          let ingredientIem = ingredient.ingredients[0];
          console.log('coctail:', ingredientIem);
          this.details.name = ingredientIem.strIngredient;
          this.details.img = `https://www.thecocktaildb.com/images/ingredients/${ingredientIem.strIngredient}-Medium.png`;

          this.coctailService.getIngredientDetailByName(ingredient.ingredients[0].strIngredient).subscribe((coctails: any) => {
            console.log('ingredient:', coctails);

            let coctailsModified = coctails.drinks.map((coctail: any) => {
              return {
                id: coctail.idDrink,
                name: coctail.strDrink,
                img: coctail.strDrinkThumb,
              }
            });

            console.log('drinks:', coctailsModified.slice(0, 6));

            this.ingredients = coctailsModified.slice(0, 6);

          })
        })
      }


    });
  }

}
