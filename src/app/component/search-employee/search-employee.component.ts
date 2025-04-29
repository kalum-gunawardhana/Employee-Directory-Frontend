import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-search-employee',
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