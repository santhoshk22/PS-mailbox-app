import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {



  ngOnInit() {

  }constructor (private router: Router ) {
    this.router.navigate(['/inbox']);
  }


}
