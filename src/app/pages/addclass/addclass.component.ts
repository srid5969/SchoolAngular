import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  addForm! : FormGroup
  teachers!:any
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      classTeacher: ['', Validators.required],
    })

    this.apiService.teacherList()
    .subscribe((data:any)=>{
      this.teachers=data;
    })
  }


  onSubmit(){
    console.log(this.addForm.value)
    this.apiService.addClass(this.addForm.value)
    .subscribe(()=>{
      this.router.navigate(['/navbar/classlist'])
    })
  }

}
