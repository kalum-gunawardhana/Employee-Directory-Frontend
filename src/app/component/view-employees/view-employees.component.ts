import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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