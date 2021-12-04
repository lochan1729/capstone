import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSessionService } from './data/login-session.service';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  sessionId:any = null
  login: any = null;
  constructor(private service: UserDataService,
    private router: Router,
    private sessionService: LoginSessionService) { }


  isAdminLoggedIn() {
    let user=sessionStorage.getItem('authenticatedAdmin')
    return !(user === null)
  }
  isManagerLoggedIn() {
    let user = sessionStorage.getItem('authenticatedManager')
    return !(user === null)
  }
  isEmployeeLoggedIn() {
    let user = sessionStorage.getItem('authenticatedEmployee')
    return !(user === null)
  }
  logout() {
    this.sessionId = sessionStorage.getItem('sessionId')
    this.sessionService.retrieveBySessionId(this.sessionId).subscribe(
      data => {
        if (data != null) {
          this.sessionService.retrieveByEmail(data.email).subscribe(
            data => {
              if (data != null) {
                this.login = data
                this.login.sessionId = null;
                this.sessionService.updateSession(this.login).subscribe(
                  data => {
                    sessionStorage.clear();
                  }
                )

              }
            }
          )

        }
      })

  }
}
