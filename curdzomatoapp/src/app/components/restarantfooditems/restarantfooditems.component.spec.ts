import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarantfooditemsComponent } from './restarantfooditems.component';

describe('RestarantfooditemsComponent', () => {
  let component: RestarantfooditemsComponent;
  let fixture: ComponentFixture<RestarantfooditemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestarantfooditemsComponent]
    });
    fixture = TestBed.createComponent(RestarantfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
