import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public username : string = '';
  public role : string = '';

  data: any;
  constructor() { }

  ngOnInit(): void {
  }

  getUserName() {
    return localStorage.getItem('firstName');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  removeToken(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('firstName')
    // window.localStorage.removeItem('editUserId')
    window.localStorage.removeItem('role')
    window.localStorage.removeItem('classname')
    window.localStorage.removeItem('classId')

    // window.localStorage.removeItem('classId')
  }

}
