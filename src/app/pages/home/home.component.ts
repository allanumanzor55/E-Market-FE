import { Component, OnInit } from '@angular/core';
import { DEFAULT_USER_IMG, ROUTES, viewImageCompanies } from 'contants';
import { CompaniesService } from 'app/services/companies/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginRoute = ROUTES.LOGIN;
  registerRoute = ROUTES.REGISTER;
  companiesList: viewImageCompanies[] = [];
  defaultImg = DEFAULT_USER_IMG;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService.getCompanies().subscribe({
      next: ({ data }) => {
        this.companiesList = data.companies
          .slice(0, 5)
          .map(({ name, _id, logo }) => ({
            id: _id || '',
            name: name,
            logo: logo,
          }));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  go(id: string) {
    console.log('Dirigir a la empresa:' + id);
  }
}
