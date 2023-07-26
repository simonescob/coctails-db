import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoItemsComponent } from './home-info-items.component';

describe('HomeInfoItemsComponent', () => {
  let component: HomeInfoItemsComponent;
  let fixture: ComponentFixture<HomeInfoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInfoItemsComponent]
    });
    fixture = TestBed.createComponent(HomeInfoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
