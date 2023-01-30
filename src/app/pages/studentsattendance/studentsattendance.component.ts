import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { post } from 'jquery';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-studentsattendance',
  templateUrl: './studentsattendance.component.html',
  styleUrls: ['./studentsattendance.component.css']
})
export class StudentsattendanceComponent implements OnInit {
 
  addForm! : FormGroup
  students: any;
  public classname : string = '';
  
  constructor(private http:ApiService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login'])
      return;
    }
   this.http.getStudents()
   .subscribe(data=>{
    var i=0
    this.students=data;
    console.log(data[i]._id);
    
   });
   
  }
 
  getClass() {
    return localStorage.getItem('classname');
  }

}
