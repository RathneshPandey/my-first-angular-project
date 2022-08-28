import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechspportComponent } from './techspport.component';

describe('TechspportComponent', () => {
  let component: TechspportComponent;
  let fixture: ComponentFixture<TechspportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechspportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechspportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
