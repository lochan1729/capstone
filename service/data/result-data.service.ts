import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from 'src/app/start-test/start-test.component';

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {

  constructor(private http:HttpClient) { }

  addQuestionsToResult(result:Result[]){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(result)
    return this.http.post<Result[]>('http://localhost:8080/addquestions',body,{'headers':headers});
  }

  retrieveResultByTestid(id:number){
    return this.http.get<Result[]>(`http://localhost:8080/resultbytest/${id}`);
  }

  updateResults(result:Result[]){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(result)
    return this.http.put<Result[]>('http://localhost:8080/results',body,{'headers':headers});
  }
}
