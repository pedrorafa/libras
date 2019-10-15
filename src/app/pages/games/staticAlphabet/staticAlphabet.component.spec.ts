import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAlphabetComponent } from './staticAlphabet.component';

describe('HangmanComponent', () => {
  let component: StaticAlphabetComponent;
  let fixture: ComponentFixture<StaticAlphabetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticAlphabetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
