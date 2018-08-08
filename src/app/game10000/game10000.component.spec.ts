import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game10000Component } from './game10000.component';

describe('Game1000Component', () => {
  let component: Game10000Component;
  let fixture: ComponentFixture<Game10000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game10000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game10000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
