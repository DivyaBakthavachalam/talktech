import { Component, OnInit } from '@angular/core';

import { DataService } from '.././data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss']
})
export class HomeComponent implements OnInit {
  goals = [];
  term :String ;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

 
}
