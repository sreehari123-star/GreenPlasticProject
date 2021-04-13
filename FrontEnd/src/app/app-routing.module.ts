import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminiComponent } from './admini/admini.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoordComponent } from './coord/coord.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'aboutus', component:AboutusComponent},
{path:'contactus', component:ContactusComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'users', component:UsersComponent},
{path:'coordinator', component:CoordinatorComponent},
{path:'coord', component:CoordComponent},
{path:'admin', component:AdminComponent,
children:[
  {path:'admini',component:AdminiComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
