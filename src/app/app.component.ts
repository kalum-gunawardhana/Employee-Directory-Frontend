import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './component/view-employees/view-employees.component';
import { SearchEmployeeComponent } from './component/search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AddEmployeeComponent, ViewEmployeesComponent, SearchEmployeeComponent, UpdateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management-frontend';
}
