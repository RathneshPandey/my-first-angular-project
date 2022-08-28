import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHostingsComponent } from './service-hostings.component';

describe('ServiceHostingsComponent', () => {
  let component: ServiceHostingsComponent;
  let fixture: ComponentFixture<ServiceHostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHostingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
