import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassreportComponent } from './classreport.component';

describe('ClassreportComponent', () => {
  let component: ClassreportComponent;
  let fixture: ComponentFixture<ClassreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
