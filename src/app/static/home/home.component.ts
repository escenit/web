import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logo = require('../../../assets/logo_512.png');

  constructor() { }

  ngOnInit() {
  }

}
