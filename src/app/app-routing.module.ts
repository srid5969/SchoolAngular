import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddclassComponent } from './pages/addclass/addclass.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ClasslistComponent } from './pages/classlist/classlist.component';
import { ClassreportComponent } from './pages/classreport/classreport.component';
import { HomeComponent } from './pages/home/home.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { StudentreportComponent } from './pages/studentreport/studentreport.component';
import { StudentsattendanceComponent } from './pages/studentsattendance/studentsattendance.component';
import { TeacherreportComponent } from './pages/teacherreport/teacherreport.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'header',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'home',component:HomeComponent},
  {path:'classlist',component:ClasslistComponent},
  {path:'addclass',component:AddclassComponent},
  {path:'studentlist',component:StudentlistComponent},
  {path:'addstudent',component:AddstudentComponent},

  {path:'navbar',
  component:NavbarComponent,
  children:[
    {path:'listuser',component:ListuserComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'home',component:HomeComponent},
    {path:'classlist',component:ClasslistComponent},
    {path:'addclass',component:AddclassComponent},
    {path:'studentlist',component:StudentlistComponent},
    {path:'addstudent',component:AddstudentComponent},
    {path:'studentattendance',component:StudentsattendanceComponent},
    {path:'profile',component:ProfileComponent},
    {path:'teacherreport',component:TeacherreportComponent},
    {path:'studentreport',component:StudentreportComponent},
    {path:'classreport',component:ClassreportComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
