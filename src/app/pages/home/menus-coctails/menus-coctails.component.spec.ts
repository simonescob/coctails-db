import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusCoctailsComponent } from './menus-coctails.component';

describe('MenusCoctailsComponent', () => {
  let component: MenusCoctailsComponent;
  let fixture: ComponentFixture<MenusCoctailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusCoctailsComponent]
    });
    fixture = TestBed.createComponent(MenusCoctailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
