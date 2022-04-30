import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkillzComponent } from './tech-skillz.component';

describe('TechSkillzComponent', () => {
  let component: TechSkillzComponent;
  let fixture: ComponentFixture<TechSkillzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSkillzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSkillzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
