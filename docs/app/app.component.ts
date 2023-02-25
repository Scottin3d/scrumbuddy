import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: 
  [
    '../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css',
    './app.component.scss',
  ]
})
export class AppComponent implements OnInit{
  public title = 'Scrumbuddy';
  public isHost: boolean = false;
  public hasSelected: boolean = false;

  constructor(
    private router: Router,
  ){

  }

  ngOnInit(): void {
    
  }

  public onHostClick(): void{
    this.hasSelected = true;
    this.isHost = true;
  }

}
