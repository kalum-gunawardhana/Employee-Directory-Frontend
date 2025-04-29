import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './component/view-employees/view-employees.component';
import { SearchEmployeeComponent } from './component/search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

export const routes: Routes = [
    { path: 'add', component: AddEmployeeComponent },
  { path: 'view', component: ViewEmployeesComponent },
  { path: 'search', component: SearchEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' }
];
