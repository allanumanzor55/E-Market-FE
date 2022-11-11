import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { get, post, patch } from 'utils/serviceRequests';
import { API_ROUTES } from 'contants';
import { TUser } from 'contants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsersList() {
    return get<{ msg: string; list: TUser[] }>(
      this.http,
      API_ROUTES.USERS.BASE
    );
  }

  createUser(body: Record<string, unknown> | FormData) {
    return post<{ user: string }>(this.http, API_ROUTES.USERS.BASE, body);
  }

  updateUserPicture(body: FormData) {
    return patch<{ newPicUrl: string }>(
      this.http,
      API_ROUTES.USERS.UPDATE_PICTURE,
      body
    );
  }
}
