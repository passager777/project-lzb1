import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMaComponent } from './hero-ma.component';

describe('HeroMaComponent', () => {
  let component: HeroMaComponent;
  let fixture: ComponentFixture<HeroMaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
