import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'contants';
import { pagesObj } from '@pages';

const {
  AdminComponent,
  CustomerComponent,
  HomeComponent,
  LoginComponent,
  PlanSelectionComponent,
  RecoverPasswordComponent,
  RegisterComponent,
  ShoppingCartComponent,
  ShoppingHistoryComponent,
  TemplateAdminComponent,
  UsersListComponent,
  CreateUserComponent,
  CompanyComponent,
  CompaniesListComponent
} = pagesObj;

const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomeComponent,
  },
  { path: ROUTES.LOGIN, component: LoginComponent },
  {
    path: ROUTES.RECOVER_PASSWORD,
    component: RecoverPasswordComponent,
  },
  { path: ROUTES.PLAN_SELECTION, component: PlanSelectionComponent },
  { path: ROUTES.REGISTER, component: RegisterComponent },
  {
    path: ROUTES.ADMIN.ROOT,
    component: AdminComponent,
    children: [
      { path: ROUTES.ADMIN.TEMPLATE, component: TemplateAdminComponent },
      { path: ROUTES.ADMIN.COMPANIES, component: CompaniesListComponent },
      { path: ROUTES.ADMIN.USERS, component: UsersListComponent },
      {
        path: `${ROUTES.ADMIN.USERS}/${ROUTES.ADMIN.CREATE_USER}`,
        component: CreateUserComponent,
      },
    ],
  },
  {
    path: ROUTES.CUSTOMER.ROOT,
    component: CustomerComponent,
    children: [
      { path: ROUTES.CUSTOMER.SHOPPING, component: ShoppingCartComponent },
      { path: ROUTES.CUSTOMER.HISTORY, component: ShoppingHistoryComponent },
    ],
  },
  { path: ROUTES.COMPANY_ADMIN.ROOT, 
    component: CompanyComponent,
    children: [
      { path: ROUTES.COMPANY_ADMIN.PAGES, component: ShoppingCartComponent },
      { path: ROUTES.COMPANY_ADMIN.PRODUCTS, component: ShoppingHistoryComponent },
      { path: ROUTES.COMPANY_ADMIN.GALERY, component: ShoppingHistoryComponent },
      { path: ROUTES.COMPANY_ADMIN.USERS, component: UsersListComponent },
      {
        path: `${ROUTES.COMPANY_ADMIN.USERS}/${ROUTES.COMPANY_ADMIN.CREATE_USER}`,
        component: CreateUserComponent,
      },
      { path: ROUTES.COMPANY_ADMIN.CONFIG, component: ShoppingHistoryComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
