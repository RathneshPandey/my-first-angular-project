import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoveComponent } from './customer-love.component';

describe('CustomerLoveComponent', () => {
  let component: CustomerLoveComponent;
  let fixture: ComponentFixture<CustomerLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
