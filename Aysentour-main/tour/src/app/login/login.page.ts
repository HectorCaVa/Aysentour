import { Component } from '@angular/core';
import { LogicaLogin } from 'src/backend/logica-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private logicaLogin: LogicaLogin) { }

  async loginUser() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.logicaLogin.loginUser(username, password);
  }
}
