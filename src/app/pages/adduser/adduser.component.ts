import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm! : FormGroup

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email:['',Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      status: ['', Validators.required],

    });
  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( () => {
        this.router.navigate(['/navbar/listuser']);
      });
  }

}
