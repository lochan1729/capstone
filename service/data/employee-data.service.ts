import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee-profile/employee-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http:HttpClient) { }

  retrieveEmployee(id:number){
    return this.http.get<Employee>(`http://localhost:8080/employee/${id}`);
  }

  updateEmployeePassword(id:number,password:string){
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Employee>(`http://localhost:8080/employee/updatepassword/${id}/${password}`,'',{'headers':headers});
  }
  retrieveAllEmployees(){
    return this.http.get<Employee[]>('http://localhost:8080/employee');
  }

  retrieveOnlyEmployees(){
    return this.http.get<Employee[]>('http://localhost:8080/onlyemployee');
  }

  retrieveOnlyManagers(){
    return this.http.get<Employee[]>('http://localhost:8080/onlymanager');
  }

  retrieveEmployeeByManager(id:number){
    return this.http.get<Employee[]>(`http://localhost:8080/employeebymanager/${id}`);
  }
  addEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(employee)
    return this.http.post<Employee>('http://localhost:8080/addemployee',body,{'headers':headers});
  }

  updateEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(employee)
    return this.http.put<Employee>('http://localhost:8080/employee',body,{'headers':headers});
  }

  deleteEmployee(id:number){
    return this.http.delete(`http://localhost:8080/employee/${id}`);
  }
}
