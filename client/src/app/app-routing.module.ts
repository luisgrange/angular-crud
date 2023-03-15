import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeesListComponent,
    },
    {
        path: 'employess',
        component: EmployeesListComponent,
    },
    {
        path: 'add/employee',
        component: AddEmployeeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }