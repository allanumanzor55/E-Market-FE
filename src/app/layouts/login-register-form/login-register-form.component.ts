import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AUTH_IMAGES } from 'contants';

import { UiService } from 'app/services/ui/ui.service';
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.scss'],
})
export class LoginRegisterFormComponent implements OnInit, OnDestroy {
  @Input() type: 'login' | 'register' = 'login';

  facebookIcon = faFacebookF;
  googleIcon = faGoogle;
  linkedinIcon = faLinkedin;

  image = '';
  redirectTo = '';
  sidebarBtnText = '';
  sidebarTitle = '';
  title = '';
  actionBtnText = '';

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    const isLogin = this.type === 'login';
    this.image = isLogin ? AUTH_IMAGES.LOGIN : AUTH_IMAGES.REGISTER;
    this.redirectTo = `/${isLogin ? 'register' : 'login'}`;
    this.sidebarBtnText = isLogin ? 'Registrate' : 'Inicia sesión';
    this.sidebarTitle = isLogin ? '¿Nuevo aquí?' : 'Crea tu cuenta';
    this.title = isLogin ? 'Inicia sesión' : 'Crea tu cuenta';
    this.actionBtnText = isLogin ? 'Iniciar sesión' : 'Crear cuenta';
    this.uiService.setShowNavbar(false);
  }

  ngOnDestroy(): void {
    this.uiService.setShowNavbar(true);
  }
}
