import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
    { path: 'add', component: AddEmployeeComponent },
    { path: 'view', component: ViewEmployeesComponent },
    { path: 'search', component: SearchEmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: '', redirectTo: '/view', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AddEmployeeComponent,
        ViewEmployeesComponent,
        SearchEmployeeComponent,
        UpdateEmployeeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }