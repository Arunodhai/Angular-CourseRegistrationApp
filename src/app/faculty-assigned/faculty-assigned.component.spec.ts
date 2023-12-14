import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAssignedComponent } from './faculty-assigned.component';

describe('FacultyAssignedComponent', () => {
  let component: FacultyAssignedComponent;
  let fixture: ComponentFixture<FacultyAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
