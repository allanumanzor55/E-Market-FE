import { Component, OnInit } from '@angular/core';
import { ROUTES, TUserRoles } from 'contants';
import { AuthService } from 'app/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { setData } from 'utils/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  registerForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    isCompany: new FormControl(false),
    companyName: new FormControl(''),
  });

  redirectUrl: { [P in TUserRoles]?: string } = {
    customer: `/${ROUTES.CUSTOMER.ROOT}`,
    company: `/${ROUTES.PLAN_SELECTION}`,
  };

  register = () => {
    const { email, password, isCompany, companyName, name } =
      this.registerForm.value;

    if (!email || !password || !name || (isCompany && !companyName)) return;
    this.authService
      .register({
        name,
        email,
        password,
        companyName: companyName || '',
      })
      .subscribe({
        next: (data) => {
          const { role, token } = data.data;
          setData('token', token);
          this.router.navigate([this.redirectUrl[role]]);
        },
        error: (err) => {
          // TODO: implementar un modal o toast para mostrar errores del backend
          console.log('error', err);
        },
      });
  };

  ngOnInit(): void {}
}
