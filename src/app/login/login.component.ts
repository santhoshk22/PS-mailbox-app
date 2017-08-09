import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit() {
  }
  constructor (private router: Router ) {}

  loginn(e) {
    const u = e.element[0];
    this.router.navigate(['/log']);
  }
}
