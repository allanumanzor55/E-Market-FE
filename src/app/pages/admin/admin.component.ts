import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, WELCOME_IMAGES } from 'contants';
import { getSubDir } from 'utils/routes';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  isRootUrl = true;
  welcomeImg = WELCOME_IMAGES.ADMIN;
  currentSubDir = '';
  userName = '';
  private userDataSubscription?: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.isRootUrl = new RegExp(`^/${ROUTES.ADMIN.ROOT}$`).test(
        this.router.url
      );
      this.currentSubDir = getSubDir(this.router.url, ROUTES.ADMIN.ROOT);
    });
  }

  ngOnInit(): void {
    this.userDataSubscription = this.authService
      .getStoredUserData()
      .subscribe((userData) => {
        this.userName = userData.name;
      });
  }

  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
  }
}
