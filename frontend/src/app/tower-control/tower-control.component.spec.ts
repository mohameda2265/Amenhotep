import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerControlComponent } from './tower-control.component';

describe('TowerControlComponent', () => {
  let component: TowerControlComponent;
  let fixture: ComponentFixture<TowerControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
