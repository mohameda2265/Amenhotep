import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockControlComponent } from './block-control.component';

describe('BlockControlComponent', () => {
  let component: BlockControlComponent;
  let fixture: ComponentFixture<BlockControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
