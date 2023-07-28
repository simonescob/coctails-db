import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Coctail } from './coctail.type';

@Component({
  selector: 'app-coctail-item',
  templateUrl: './coctail-item.component.html',
  styleUrls: ['./coctail-item.component.scss']
})
export class CoctailItemComponent {

  @Input() coctail: Coctail = {
    name: '',
    img: '',
    added: false,
    circleColor: '',
    isCoctail: true,
    id: 0,
  }

  constructor(
    private router: Router,
  ){}

  goToDetail(coctail: Coctail){
    this.router.navigate(['detail', coctail.id, 'type', coctail.isCoctail === true ? 'drink' : 'ingredient' ])
  }

}
