import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user.model';

// import 'rxjs/add/operator/map';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  users!: any;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  router: any;

  constructor(private httpClient: HttpClient,private http:ApiService,private route:Router) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('token')){
      this.router.navigate(['login'])
      return;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    },100;
    this.http.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(data)
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  addUser(){
    this.router.navigate(['/navbar/adduser']);
  };
}
