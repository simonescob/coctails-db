import { Component, OnInit } from '@angular/core';
import { CoctailsService } from 'src/app/services/coctails.service';

@Component({
  selector: 'app-menus-coctails',
  templateUrl: './menus-coctails.component.html',
  styleUrls: ['./menus-coctails.component.scss']
})
export class MenusCoctailsComponent implements OnInit {

  popDrinks = [
    {
      name: 'mojito',
      img: 'assets/images/mojito.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Old Fashioned',
      img: 'assets/images/Old Fashioned.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Long Island Tea',
      img: 'assets/images/Long Island Tea.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Negroni',
      img: 'assets/images/Negroni.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Whiskey Sour',
      img: 'assets/images/Whiskey Sour.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Dry Martini',
      img: 'assets/images/Dry Martini.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Daiquiri',
      img: 'assets/images/Daiquiri.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Margarita',
      img: 'assets/images/Margarita.png',
      circleColor: 'skin',
      added: false,
    }
  ];

  popIngres = [
    {
      name: 'Vodka',
      img: 'assets/images/Vodka.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Gin',
      img: 'assets/images/Gin.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Rum',
      img: 'assets/images/Rum.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Tequila',
      img: 'assets/images/Tequila.png',
      circleColor: 'green',
      added: false,
    }
  ];

  latestDrinks = [
    {
      name: "Cocktail Horse's Neck",
      img: 'assets/images/Cocktail Horses Neck.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Planters Punch',
      img: 'assets/images/Planters Punch.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Ramos Gin Fizz',
      img: 'assets/images/Ramos Gin Fizz.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Gin Lemon',
      img: 'assets/images/Gin Lemon.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: "Gin Tonic",
      img: 'assets/images/Gin Tonic.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Vodka Tonic',
      img: 'assets/images/Vodka Tonic.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Vodka Lemon',
      img: 'assets/images/Vodka Lemon.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Vodka Slime',
      img: 'assets/images/Vodka Slime.png',
      circleColor: 'skin',
      added: false,
    },
  ];

  randomIngres = [
    {
      name: 'Limeade',
      img: 'assets/images/Limeade.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Chocolate Syrup',
      img: 'assets/images/Chocolate Syrup.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Melon Liqueur',
      img: 'assets/images/Melon Liqueur.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Kiwi Liqueur',
      img: 'assets/images/Kiwi Liqueur.png',
      circleColor: 'green',
      added: false,
    }
  ];

  randomDrinks = [
    {
      name: "Pure Passion",
      img: 'assets/images/Pure Passion.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: 'Egg Nog #4',
      img: 'assets/images/Egg-Nog-n4.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Kiwi Papaya Smoothie',
      img: 'assets/images/Kiwi Papaya Smoothie.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'Wine Punch',
      img: 'assets/images/Wine Punch.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: "Arise My Love",
      img: 'assets/images/Arise My Love.png',
      circleColor: 'green',
      added: false,
    },
    {
      name: 'Screwdriver',
      img: 'assets/images/Screwdriver.png',
      circleColor: 'skin',
      added: false,
    },
    {
      name: 'After Five',
      img: 'assets/images/After Five.png',
      circleColor: 'pink',
      added: false,
    },
    {
      name: '151 Florida Bushwacker',
      img: 'assets/images/151 Florida Bushwacker.png',
      circleColor: 'skin',
      added: false,
    },
  ];

  constructor(
    private coctailService: CoctailsService,
  ){}

  ngOnInit(): void {
    this.coctailService.getDrinks().subscribe((coctails: any) => {
      console.log('coctails list: ', coctails);
    })
  }

}
