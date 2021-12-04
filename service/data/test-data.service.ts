import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from 'src/app/start-test/start-test.component';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(private http:HttpClient) { }

  assignTest(test:Test){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(test)
    return this.http.post<Test>('http://localhost:8080//assigntest',body,{'headers':headers});
}
  retrieveTestByEmployee(id:number){
    return this.http.get<Test[]>(`http://localhost:8080/test/${id}`);
  }

  retrieveResultByEmployee(id:number){
    return this.http.get<Test[]>(`http://localhost:8080/resultbyemployee/${id}`);
  }

  retrieveResults(){
    return this.http.get<Test[]>('http://localhost:8080/result')
  }
  retrieveResultsByManager(id:number){
    return this.http.get<Test[]>(`http://localhost:8080/resultbymanager/${id}`)
  }
  retriveTest(id:number){
    return this.http.get<Test>(`http://localhost:8080/bytest/${id}`)
  }

  retrieveAssignedTest(id:number,category:string,level:number){
    return this.http.get<Test>(`http://localhost:8080/testdata/${category}/${level}/${id}`)
  }
  updateTest(test:Test){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(test)
    return this.http.put<Test>('http://localhost:8080/bytest',body,{'headers':headers});
  }
}
