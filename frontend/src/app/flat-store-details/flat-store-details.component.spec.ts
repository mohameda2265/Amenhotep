import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatStoreDetailsComponent } from './flat-store-details.component';

describe('FlatStoreDetailsComponent', () => {
  let component: FlatStoreDetailsComponent;
  let fixture: ComponentFixture<FlatStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatStoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
