import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

  folderImg = "assets/images/"

  items = [
    {
      img: this.folderImg + 'water-solid 1.png',
      title: "Versatility",
      text: "The range of flavors in gin is exceptionally wide, thanks to the variety of botanicals that can be used in its production."
    },
    {
      img: this.folderImg + 'cocktail-solid 1.png',
      title: "Distiontiv Flavor",
      text: "Bittersweet and slightly woody flavor is the signature of any gin."
    },
    {
      img: this.folderImg + 'Vector.png',
      title: "Purity",
      text: "This gives it a clean, pure feel, without the caramel or vanilla notes that come from barrel aging."
    },
  ]

}
