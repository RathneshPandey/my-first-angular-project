import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestqualityComponent } from './bestquality.component';

describe('BestqualityComponent', () => {
  let component: BestqualityComponent;
  let fixture: ComponentFixture<BestqualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestqualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
