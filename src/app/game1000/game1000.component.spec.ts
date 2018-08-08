import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1000Component } from './game1000.component';

describe('Game1000Component', () => {
  let component: Game1000Component;
  let fixture: ComponentFixture<Game1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
