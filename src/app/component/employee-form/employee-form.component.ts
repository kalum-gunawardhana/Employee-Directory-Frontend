import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    name: '',
    email: '',
    department: '',
  };

  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.employeeService.getEmployees().subscribe((employees) => {
        this.employee = employees.find((emp) => emp.id === +id)!;
      });
    }
  }

  saveEmployee(): void {
    if (this.isEditMode) {
      this.employeeService
        .updateEmployee(this.employee.id!, this.employee)
        .subscribe(() => this.router.navigate(['/employees']));
    } else {
      this.employeeService
        .createEmployee(this.employee)
        .subscribe(() => this.router.navigate(['/employees']));
    }
  }
}