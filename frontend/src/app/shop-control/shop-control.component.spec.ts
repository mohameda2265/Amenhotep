import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopControlComponent } from './shop-control.component';

describe('ShopControlComponent', () => {
  let component: ShopControlComponent;
  let fixture: ComponentFixture<ShopControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
