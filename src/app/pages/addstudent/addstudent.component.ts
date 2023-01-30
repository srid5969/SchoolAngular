import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm! : FormGroup

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      fathername:['',Validators.required],
      mothername: ['', Validators.required],
      gender: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],

    });
  }

  onSubmit() {
    this.apiService.addStudent(this.addForm.value)
      .subscribe( () => {
        this.router.navigate(['navbar/studentlist']);
      });
  }

}
