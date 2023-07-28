import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientItemComponent } from './ingredient-item.component';

describe('IngredientItemComponent', () => {
  let component: IngredientItemComponent;
  let fixture: ComponentFixture<IngredientItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientItemComponent]
    });
    fixture = TestBed.createComponent(IngredientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
