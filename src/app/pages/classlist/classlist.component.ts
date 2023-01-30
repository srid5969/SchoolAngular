import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  classes!: any;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  router: any;

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
    this.http.getClass()
      .subscribe(data => {
        //IF CLICK(ID)
        //HTTP.ATTEN(ID)
        // console.log(data[1].classId)
        this.classes = data;
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      });
  }

  classstudents(id:any){
   
    window.localStorage.setItem('classId',this.classes[id].classId)
    window.localStorage.setItem('classname',this.classes[id].name)
    // console.log(this.classes[id].classId)
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.subscribe();
  }

  addClass() {
    this.router.navigate(['addclass']);
  };
}

