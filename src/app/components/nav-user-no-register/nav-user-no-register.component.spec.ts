import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserNoRegisterComponent } from './nav-user-no-register.component';

describe('NavUserNoRegisterComponent', () => {
  let component: NavUserNoRegisterComponent;
  let fixture: ComponentFixture<NavUserNoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavUserNoRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavUserNoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
