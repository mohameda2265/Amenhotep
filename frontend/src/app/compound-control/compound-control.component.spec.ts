import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundControlComponent } from './compound-control.component';

describe('CompoundControlComponent', () => {
  let component: CompoundControlComponent;
  let fixture: ComponentFixture<CompoundControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
