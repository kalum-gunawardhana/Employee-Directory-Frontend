import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiUrl = 'http://localhost:8080/api/employees';

    constructor(private http: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}/get-all`);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiUrl}/add`, employee);
    }

    updateEmployee(id: number, employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiUrl}/update/${id}`, employee);
    }

    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    searchEmployees(keyword: string): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}/search?keyword=${keyword}`);
    }
}