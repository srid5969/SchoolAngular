import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  router: any;
  constructor(private http:HttpClient) { }

  login(loginPayload:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>('http://192.168.0.174:8080/user/login',loginPayload)
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('http://192.168.0.174:8080/user/all');
  }

  

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://192.168.0.174:8080/user/signup', user);
  }

  getClass():Observable<any>{
    return this.http.get<any>('http://192.168.0.174:8080/class/all');
  }

  addClass(user: User):Observable<any>{
    return this.http.post<any>('http://192.168.0.174:8080/class/assign',user);
  }
//http://localhost:8080/student/class/63a1823ffc2f067bad8c429e
  getStudents():Observable<any>{
    return this.http.get<any>('http://192.168.0.174:8080/student/class/'+window.localStorage.getItem('classId'));
  }

  addStudent(user:any):Observable<any>{
    return this.http.post<any>('http://192.168.0.174:8080/student/register/?classid='+window.localStorage.getItem('classId'),user);
  }
 
  studentattendance(user:any):Observable<any>{
    return this.http.post<any>('http://192.168.0.174:8080/student/attendance/?classId='+window.localStorage.getItem('classId'),user);
  }

  teacherList():Observable<any>{
    return this.http.get<any>('http://192.168.0.174:8080/user/all/Teacher');
  }


  //Generate Report Api

  classReport(user: User):Observable<any>{
    return this.http.post<any>('http://192.168.0.174:8080/csv/student/attendance',user);
  }
  

}
