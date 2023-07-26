import { Component, OnInit } from '@angular/core';
import { CoctailsService } from 'src/app/services/coctails.service';

@Component({
  selector: 'app-menus-coctails',
  templateUrl: './menus-coctails.component.html',
  styleUrls: ['./menus-coctails.component.scss']
})
export class MenusCoctailsComponent implements OnInit {

  constructor(
    private coctailService: CoctailsService,
  ){}

  ngOnInit(): void {
    this.coctailService.getDrinks().subscribe((coctails: any) => {
      console.log('coctails list: ', coctails);
    })
  }

}
