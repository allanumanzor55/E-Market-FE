import { Component, OnInit } from '@angular/core';
import { dataSelect, ROUTES, TNavbarUserData, TUserRoles } from 'contants';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CompaniesService } from 'app/services/companies/companies.service';
import { UsersService } from 'app/services/users/users.service';
import { AuthService } from 'app/services/auth/auth.service';

const userTypesOptions: {
  [role in TUserRoles]: dataSelect;
} = {
  admin: { option: 'Administrador', value: '1' },
  company: { option: 'Empresa', value: '3' },
  customer: { option: 'Cliente', value: '2' },
};

const userTypesOptionsCompany= {
  company: { option: 'Empresa', value: '3' },
  customer: { option: 'Cliente', value: '2' },
};
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  
  constructor(
    private companiesService: CompaniesService,
    private userService: UsersService,
    private router: Router,
    private authService: AuthService,
  ) {}

  newUserForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    userType: new FormControl(''),
    companyId: new FormControl(''),
    profilePic: new FormControl(''),
  });

  companiesList: dataSelect[] = [];

  dataUserType: dataSelect[] = Object.values(userTypesOptions);

  usersListUrl = `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.USERS}`;

  userData?: TNavbarUserData;

  ngOnInit(): void {
    this.authService.getStoredUserData().subscribe((userData) => {
      this.userData = userData;
    });
    
    if (this.userData?.role=='company') {
      this.dataUserType = Object.values(userTypesOptionsCompany)
    }

    
    
    this.companiesService.getCompanies().subscribe({
      next: ({ data }) => {
        this.companiesList = data.companies.map(({ name, _id }) => ({
          option: name,
          value: _id || '',
        }));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createUser() {
    const formData = new FormData();
    const formValues = this.newUserForm.value as Record<string, string | Blob>;
    for (const key of Object.keys(formValues)) {
      if (formValues[key]) formData.append(key, formValues[key]);
    }

    this.userService.createUser(formData).subscribe({
      next: () => {
        this.router.navigate([this.usersListUrl]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
