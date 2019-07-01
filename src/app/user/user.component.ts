import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
