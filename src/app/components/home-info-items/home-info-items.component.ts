import { Component, Input } from '@angular/core';

interface info {
  img: string,
  title: string,
  text: string,
}

@Component({
  selector: 'app-home-info-items',
  templateUrl: './home-info-items.component.html',
  styleUrls: ['./home-info-items.component.scss']
})
export class HomeInfoItemsComponent {

  @Input() info: info = {
    img: '',
    title: '',
    text: '',
  }

}
