import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../department.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number;
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