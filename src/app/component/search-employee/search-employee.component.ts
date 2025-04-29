import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  keyword: string = '';
  employees: Employee[] = [];
  isLoading = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  searchEmployees(): void {
    if (this.keyword.trim()) {
      this.isLoading = true;
      this.employeeService.searchEmployees(this.keyword).subscribe(
        data => {
          this.employees = data;
          this.isLoading = false;
        },
        error => {
          console.error('Error searching employees:', error);
          this.isLoading = false;
        }
      );
    }
  }
}