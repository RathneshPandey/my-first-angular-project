import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostServiceComponent } from './host-service.component';

describe('HostServiceComponent', () => {
  let component: HostServiceComponent;
  let fixture: ComponentFixture<HostServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
