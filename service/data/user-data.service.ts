import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee-profile/employee-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getuserDataByEmail(username:string){
   return this.http.get<Employee>(`http://localhost:8080/employeebyemail/${username}`);
  }
  getuserData(username:string,password:string){
    return this.http.get<Employee>(`http://localhost:8080/employee/${username}/${password}`);
   }
}

// export class User{
//   constructor(
//     public name:string,
//     public email:string,
//     public password:string
//     ){

//     }
// }

