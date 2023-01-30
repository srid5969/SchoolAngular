import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public username : string = '';
  public role : string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  getUserName() {
    return localStorage.getItem('firstName');
  }

  getRole() {
    return localStorage.getItem('role');
  }



}
