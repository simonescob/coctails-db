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
      id: 11000,
      isCoctail: true,
    },
    {
      name: 'Old Fashioned',
      img: 'assets/images/Old Fashioned.png',
      circleColor: 'green',
      added: false,
      id: 11001,
      isCoctail: true
    },
    {
      name: 'Long Island Tea',
      img: 'assets/images/Long Island Tea.png',
      circleColor: 'skin',
      added: false,
      id: 11002,
      isCoctail: true
    },
    {
      name: 'Negroni',
      img: 'assets/images/Negroni.png',
      circleColor: 'pink',
      added: false,
      id: 11003,
      isCoctail: true
    },
    {
      name: 'Whiskey Sour',
      img: 'assets/images/Whiskey Sour.png',
      circleColor: 'green',
      added: false,
      id: 11004,
      isCoctail: true
    },
    {
      name: 'Dry Martini',
      img: 'assets/images/Dry Martini.png',
      circleColor: 'skin',
      added: false,
      id: 11005,
      isCoctail: true
    },
    {
      name: 'Daiquiri',
      img: 'assets/images/Daiquiri.png',
      circleColor: 'pink',
      added: false,
      id: 11006,
      isCoctail: true
    },
    {
      name: 'Margarita',
      img: 'assets/images/Margarita.png',
      circleColor: 'skin',
      added: false,
      id: 11007,
      isCoctail: true
    }
  ];

  popIngres = [
    {
      name: 'Vodka',
      img: 'assets/images/Vodka.png',
      circleColor: 'pink',
      added: false,
      id: 1,
      isCoctail: false
    },
    {
      name: 'Gin',
      img: 'assets/images/Gin.png',
      circleColor: 'green',
      added: false,
      id: 2,
      isCoctail: false
    },
    {
      name: 'Rum',
      img: 'assets/images/Rum.png',
      circleColor: 'skin',
      added: false,
      id: 3,
      isCoctail: false
    },
    {
      name: 'Tequila',
      img: 'assets/images/Tequila.png',
      circleColor: 'green',
      added: false,
      id: 4,
      isCoctail: false
    }
  ];

  latestDrinks = [
    {
      name: "Cocktail Horse's Neck",
      img: 'assets/images/Cocktail Horses Neck.png',
      circleColor: 'pink',
      added: false,
      id: 178370,
      isCoctail: true
    },
    {
      name: 'Planters Punch',
      img: 'assets/images/Planters Punch.png',
      circleColor: 'green',
      added: false,
      id: 178369,
      isCoctail: true
    },
    {
      name: 'Ramos Gin Fizz',
      img: 'assets/images/Ramos Gin Fizz.png',
      circleColor: 'skin',
      added: false,
      id: 178368,
      isCoctail: true
    },
    {
      name: 'Gin Lemon',
      img: 'assets/images/Gin Lemon.png',
      circleColor: 'pink',
      added: false,
      id: 178367,
      isCoctail: true
    },
    {
      name: "Gin Tonic",
      img: 'assets/images/Gin Tonic.png',
      circleColor: 'green',
      added: false,
      id: 178366,
      isCoctail: true
    },
    {
      name: 'Vodka Tonic',
      img: 'assets/images/Vodka Tonic.png',
      circleColor: 'skin',
      added: false,
      id: 178365,
      isCoctail: true
    },
    {
      name: 'Vodka Lemon',
      img: 'assets/images/Vodka Lemon.png',
      circleColor: 'pink',
      added: false,
      id: 178364,
      isCoctail: true
    },
    {
      name: 'Vodka Slime',
      img: 'assets/images/Vodka Slime.png',
      circleColor: 'skin',
      added: false,
      id: 1783763,
      isCoctail: true
    },
  ];

  randomIngres = [
    {
      name: 'Limeade',
      img: 'assets/images/Limeade.png',
      circleColor: 'pink',
      added: false,
      id: 160,
      isCoctail: false
    },
    {
      name: 'Chocolate Syrup',
      img: 'assets/images/Chocolate Syrup.png',
      circleColor: 'green',
      added: false,
      id: 527,
      isCoctail: false
    },
    {
      name: 'Melon Liqueur',
      img: 'assets/images/Melon Liqueur.png',
      circleColor: 'skin',
      added: false,
      id: 186,
      isCoctail: false
    },
    {
      name: 'Kiwi Liqueur',
      img: 'assets/images/Kiwi Liqueur.png',
      circleColor: 'green',
      added: false,
      id: 461,
      isCoctail: false
    }
  ];

  randomDrinks = [
    {
      name: "Pure Passion",
      img: 'assets/images/Pure Passion.png',
      circleColor: 'pink',
      added: false,
      id: 178338,
      isCoctail: true
    },
    {
      name: 'Egg Nog #4',
      img: 'assets/images/Egg-Nog-n4.png',
      circleColor: 'green',
      added: false,
      id: 12910,
      isCoctail: true
    },
    {
      name: 'Kiwi Papaya Smoothie',
      img: 'assets/images/Kiwi Papaya Smoothie.png',
      circleColor: 'skin',
      added: false,
      id: 12714,
      isCoctail: true
    },
    {
      name: 'Wine Punch',
      img: 'assets/images/Wine Punch.png',
      circleColor: 'pink',
      added: false,
      id: 13058,
      isCoctail: true
    },
    {
      name: "Arise My Love",
      img: 'assets/images/Arise My Love.png',
      circleColor: 'green',
      added: false,
      id: 11053,
      isCoctail: true
    },
    {
      name: 'Screwdriver',
      img: 'assets/images/Screwdriver.png',
      circleColor: 'skin',
      added: false,
      id: 12162,
      isCoctail: true
    },
    {
      name: 'After Five',
      img: 'assets/images/After Five.png',
      circleColor: 'pink',
      added: false,
      id: 13807,
      isCoctail: true
    },
    {
      name: '151 Florida Bushwacker',
      img: 'assets/images/151 Florida Bushwacker.png',
      circleColor: 'skin',
      added: false,
      id: 14588,
      isCoctail: true
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
