import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game90Component } from './game90.component';

describe('Game90Component', () => {
  let component: Game90Component;
  let fixture: ComponentFixture<Game90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
