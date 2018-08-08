import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game125Component } from './game125.component';

describe('Game9Component', () => {
  let component: Game125Component;
  let fixture: ComponentFixture<Game125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
