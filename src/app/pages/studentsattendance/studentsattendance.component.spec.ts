import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsattendanceComponent } from './studentsattendance.component';

describe('StudentsattendanceComponent', () => {
  let component: StudentsattendanceComponent;
  let fixture: ComponentFixture<StudentsattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsattendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
