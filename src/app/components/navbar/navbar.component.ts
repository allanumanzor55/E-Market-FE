import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ROUTES,
  ONLINE_MARKET_LOGO,
  getUrlByRole,
  TNavbarUserData,
} from 'contants';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { UsersService } from 'app/services/users/users.service';
import { Subscription } from 'rxjs';

import { deleteData } from 'utils/storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UsersService
  ) {}

  loginRoute = ROUTES.LOGIN;
  registerRoute = ROUTES.REGISTER;
  homeRedirect = '/';
  logo = ONLINE_MARKET_LOGO;
  showUserMenu = false;
  userData: TNavbarUserData = {
    name: '',
    profilePic: '',
  };
  modalIsOpen = false;
  private userDataSubscription?: Subscription;
  private authSubscription?: Subscription;

  pictureForm = new FormGroup({
    picture: new FormControl(''),
  });

  toggleMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  openModal() {
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  logOut() {
    deleteData('token');
    this.authService.setUserData('', '');
    this.router.navigate(['/login']);
  }

  updatePicture() {
    const { picture } = this.pictureForm.value;
    if (!picture) return;
    const formData = new FormData();
    formData.append('picture', picture);
    this.userService.updateUserPicture(formData).subscribe({
      next: (data) => {
        const { name, role } = this.userData;
        const pictureUrl = data.data.newPicUrl;
        this.authService.setUserData(name, pictureUrl, role);
        this.modalIsOpen = false;
        this.pictureForm.reset();
      },
    });
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.verifyUser().subscribe({
      next: (data) => {
        const { profilePic, name, role } = data.data;
        this.homeRedirect = getUrlByRole[role];
        this.authService.setUserData(name, profilePic, role);
      },
    });

    this.userDataSubscription = this.authService
      .getStoredUserData()
      .subscribe((userData) => {
        this.userData = userData;
      });
  }

  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
    this.authSubscription?.unsubscribe();
  }
}
