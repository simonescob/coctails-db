import { Component, Input } from '@angular/core';
import { Coctail } from '../coctail-item/coctail.type';

@Component({
  selector: 'app-coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.scss']
})
export class CoctailListComponent {

  @Input() coctails: Coctail[] = []

}
