import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, WELCOME_IMAGES } from 'contants';
import { getSubDir } from 'utils/routes';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit, OnDestroy {
  isRootUrl = true;
  welcomeImg = WELCOME_IMAGES.ADMIN;
  currentSubDir = '';
  userName = '';
  private userDataSubscription?: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.isRootUrl = new RegExp(`^/${ROUTES.COMPANY_ADMIN.ROOT}$`).test(
        this.router.url
      );
      this.currentSubDir = getSubDir(
        this.router.url,
        ROUTES.COMPANY_ADMIN.ROOT
      );
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
