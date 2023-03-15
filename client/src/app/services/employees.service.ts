import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.baseApiUrl+'/api/employees');
  }

  addEmployee(addEmployeeRequest: IEmployee): Observable<IEmployee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<IEmployee>(this.baseApiUrl+'/api/employees', addEmployeeRequest);
  }
}

