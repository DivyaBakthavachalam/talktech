import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {
  private contents = new BehaviorSubject<any>(['50 Must-have plugins for extending Twitter Bootstrap', 'Making a Super Simple Registration System With PHP and MySQL','Create a slide-out footer with this neat z-index trick','How to Make a Digital Clock with jQuery and CSS3']);
  goal = this.contents.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.contents.next(goal)
  }
}
