import { Component } from '@angular/core';
import { IEmployee } from '../../../models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: IEmployee[] = [];


  constructor(private employeesService: EmployeesService, private router: Router) {}

  ngOnInit(): void{
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {this.employees = employees},
      error: (response) => {console.log(response)}
    });
  }

  deleteEmployee(id: string){
    this.employeesService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      }
    })
  }
}
