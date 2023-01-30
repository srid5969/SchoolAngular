import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherreportComponent } from './teacherreport.component';

describe('TeacherreportComponent', () => {
  let component: TeacherreportComponent;
  let fixture: ComponentFixture<TeacherreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
