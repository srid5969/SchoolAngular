import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  students!: any;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  router: any;

  public classname : string = '';
  public newName:string='';
  public DOB:string='';
  public FatherName:string='';
  public MotherName:string='';
  public City:string='';
  public Gender:string='';
 
  constructor(private httpClient: HttpClient, private http: ApiService, private route: Router) { }

  ngOnInit(): void {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login'])
      return;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    }, 100;
    this.http.getStudents()
      .subscribe(data => {
        // window.localStorage.setItem('className',dataclassName)
        this.students = data;
        // console.log(data)

      });
    

  }

  getStudent(id:any){
    this.http.getStudents()
     .subscribe(data =>{
      // var i=1;
      data=data[id]
      console.log(data);
      this.newName=data.firstName;
      this.DOB=data.dob;
      this.Gender=data.gender;
      this.FatherName=data.fathername;
      this.MotherName=data.mothername;
      this.City=data.city;
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  addStudent() {
    this.router.navigate(['addstudent']);
  };

  getClass() {
    return localStorage.getItem('classname');
  }
}

