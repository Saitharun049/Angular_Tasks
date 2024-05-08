import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBoundComponent } from './data-bound/data-bound.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { DataResolver } from './data.resolver';

const routes: Routes = [
  // Creating a Route
  {
    component: DataBoundComponent, path:'databound'
  },
  // Using Route Parameters
  {
    path:'employee/:empId', component: EmployeeDetailsComponent, resolve: {data : DataResolver},
    canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]
  },
  {
    path:'employee/details', component: EmployeeDetailsComponent,
    canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]
  },
  {
    path: '', redirectTo: '/databound', pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
