import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'app/services/companies/companies.service';
import { DEFAULT_USER_IMG, ROUTES, TCompany} from 'contants';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  createUserUrl = "";
  defaultImg = DEFAULT_USER_IMG;
  companyList: TCompany[] = [];

  constructor(private CompaniesService: CompaniesService) {}

  ngOnInit(): void {
    this.CompaniesService.getCompanies().subscribe({
      next: (data) => {
        this.companyList = data.data.companies;
        console.log(data.data.companies)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
