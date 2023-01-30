import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-classreport',
  templateUrl: './classreport.component.html',
  styleUrls: ['./classreport.component.css']
})
export class ClassreportComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm! : FormGroup;
  classes:any;

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      className:[''],
      from:[''],
      to:['']
    })
    this.apiService.getClass()
    .subscribe((data:any)=>{
      this.classes=data
    })
  }

  onSubmit(){
     this.apiService.classReport(this.addForm.value)
     .subscribe(()=>{
      this.router.navigate(['/navbar/classreport'])
     })
  }

}
