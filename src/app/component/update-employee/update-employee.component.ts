import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number;
  departments: Department[] = [
    
  ];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
    this.employeeId = 0;
  }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.params['id'];
    this.loadEmployee();
  }

  loadEmployee(): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      employee => {
        this.employeeForm.patchValue({
          name: employee.name,
          email: employee.email,
          department: employee.department
        });
      },
      error => {
        console.error('Error loading employee:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeId, this.employeeForm.value).subscribe(
        () => {
          this.router.navigate(['/view']);
        },
        error => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }
}