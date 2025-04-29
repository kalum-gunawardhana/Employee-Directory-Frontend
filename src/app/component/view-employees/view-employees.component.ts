import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching employees:', error);
        this.isLoading = false;
      }
    );
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          this.employees = this.employees.filter(emp => emp.id !== id);
        },
        error => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }

  editEmployee(id: number): void {
    this.router.navigate(['/update', id]);
  }
}