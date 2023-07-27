import { Component, Input } from '@angular/core';
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
  }

}
