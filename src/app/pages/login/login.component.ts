import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, getUrlByRole } from 'contants';
import { AuthService } from 'app/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { setData } from 'utils/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  user = '';

  recoverPasswordBtnData = {
    text: '¿Olvidaste tu contraseña?',
    action: () => {
      this.router.navigate([`/${ROUTES.RECOVER_PASSWORD}`]);
    },
  };

  login = () => {
    const { email, password } = this.loginForm.value;
    if (!email || !password) return;
    this.authService.login({ email, password }).subscribe({
      next: (data) => {
        const { role, token } = data.data;
        setData('token', token);
        this.router.navigate([getUrlByRole[role]]);
      },
      error: (err) => {
        // TODO: implementar un modal o toast para mostrar errores del backend
        console.log('error', err);
      },
    });
  };
}
