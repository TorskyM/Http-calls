import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { HttpService } from '../../shared/services/http.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.html',
  styleUrls: ['./users-page.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private readonly httpService: HttpService ) { }

  public users$: Observable<Array<User>>;
  
  public ngOnInit(): void {
    this.users$ = this.httpService.getUsers();
  }
}
