import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { DataTablesModule } from "angular-datatables";
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClasslistComponent } from './pages/classlist/classlist.component';
import { AddclassComponent } from './pages/addclass/addclass.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { StudentsattendanceComponent } from './pages/studentsattendance/studentsattendance.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentreportComponent } from './pages/studentreport/studentreport.component';
import { TeacherreportComponent } from './pages/teacherreport/teacherreport.component';
import { ClassreportComponent } from './pages/classreport/classreport.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    ListuserComponent,
    HomeComponent,
    AdduserComponent,
    NavbarComponent,
    ClasslistComponent,
    AddclassComponent,
    StudentlistComponent,
    AddstudentComponent,
    StudentsattendanceComponent,
    ProfileComponent,
    StudentreportComponent,
    TeacherreportComponent,
    ClassreportComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
