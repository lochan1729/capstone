import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Login{
  constructor(public sessionId:any,
    public email:string,
    public id:number,
    public type:string){}
}
@Injectable({
  providedIn: 'root'
})
export class LoginSessionService {

  constructor(private http:HttpClient) { }

  addSession(login:Login){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(login)
    return this.http.post<Login>('http://localhost:8080/session',body,{'headers':headers});
  }

  updateSession(login:Login){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(login)
    return this.http.put<Login>('http://localhost:8080/updatesession',body,{'headers':headers});
  }

  retrieveBySessionId(session_id:string){
    return this.http.get<Login>(`http://localhost:8080/sessionbysid/${session_id}`);
  }

  retrieveByEmail(email:string){
    return this.http.get<Login>(`http://localhost:8080/sessionbyemail/${email}`)
  }



}
