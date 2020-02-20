import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() public user: User;

  ngOnInit(): void {
  }

}
