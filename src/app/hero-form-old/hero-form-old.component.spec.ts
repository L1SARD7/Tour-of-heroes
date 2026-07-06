import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormOldComponent } from './hero-form-old.component';

describe('HeroFormOldComponent', () => {
  let component: HeroFormOldComponent;
  let fixture: ComponentFixture<HeroFormOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFormOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
