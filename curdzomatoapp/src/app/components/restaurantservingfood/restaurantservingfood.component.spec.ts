import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantservingfoodComponent } from './restaurantservingfood.component';

describe('RestaurantservingfoodComponent', () => {
  let component: RestaurantservingfoodComponent;
  let fixture: ComponentFixture<RestaurantservingfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantservingfoodComponent]
    });
    fixture = TestBed.createComponent(RestaurantservingfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
