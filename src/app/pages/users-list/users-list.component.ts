import { Component, OnInit } from '@angular/core';
import { DEFAULT_USER_IMG, TUser, ROUTES } from 'contants';
import { UsersService } from 'app/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  defaultImg = DEFAULT_USER_IMG;
  usersList: TUser[] = [];
  createUserUrl = ROUTES.ADMIN.CREATE_USER;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe({
      next: (data) => {
        this.usersList = data.data.list;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
