import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatControlComponent } from './flat-control.component';

describe('FlatControlComponent', () => {
  let component: FlatControlComponent;
  let fixture: ComponentFixture<FlatControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
