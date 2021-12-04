import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/question-list/question-list.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  constructor(private http:HttpClient) { }
  retrieveQuestion(id:number){
    return this.http.get<Question>(`http://localhost:8080/question/${id}`);
  }
  retrieveQuestions(category:string,level:number){
    return this.http.get<Question[]>(`http://localhost:8080/question/${category}/${level}`);
  }
  retrieveAllQuestions(){
    return this.http.get<Question[]>('http://localhost:8080/question');
  }

  addQuestion(question:Question){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(question)
    return this.http.post<Question>('http://localhost:8080/addquestion',body,{'headers':headers});
  }

  updateQuestion(question:Question){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(question)
    return this.http.put<Question>('http://localhost:8080/question',body,{'headers':headers});
  }

  deleteQuestion(id:number){
    return this.http.delete(`http://localhost:8080/question/${id}`);
  }
}
