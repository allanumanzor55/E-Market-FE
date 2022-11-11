import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  TUserRoles,
  API_ROUTES,
  TNavbarUserData,
  DEFAULT_USER_IMG,
} from 'contants';
import { BehaviorSubject } from 'rxjs';

import { post, get } from 'utils/serviceRequests';

type TLoginResponse = {
  token: string;
  role: TUserRoles;
  name: string;
  profilePic: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private userData = new BehaviorSubject<TNavbarUserData>({
    name: '',
    profilePic: DEFAULT_USER_IMG,
  });

  login(body: { email: string; password: string }) {
    return post<TLoginResponse>(this.http, API_ROUTES.LOGIN, body);
  }

  register(body: {
    name: string;
    email: string;
    password: string;
    companyName: string;
  }) {
    return post<TLoginResponse>(this.http, API_ROUTES.REGISTER, body);
  }

  verifyUser() {
    return get<{ role: TUserRoles; name: string; profilePic: string }>(
      this.http,
      '/auth/verify-user'
    );
  }

  setUserData(name: string, profilePic: string, role?: TUserRoles) {
    this.userData.next({
      name,
      profilePic: profilePic || DEFAULT_USER_IMG,
      role,
    });
  }

  getStoredUserData() {
    return this.userData;
  }
}
