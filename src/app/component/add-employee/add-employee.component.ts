import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departments: Department[] = [
    { value: 'HR', viewValue: 'Human Resources' },
    { value: 'IT', viewValue: 'Information Technology' },
    { value: 'Finance', viewValue: 'Finance' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Operations', viewValue: 'Operations' }
  ];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(
        () => {
          this.router.navigate(['/view']);
        },
        error => {
          console.error('Error adding employee:', error);
        }
      );
    }
  }
}

interface Department {
  value: string;
  viewValue: string;
}