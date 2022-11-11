import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { get } from 'utils/serviceRequests';
import { TCompany } from 'contants';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getCompanies() {
    return get<{ companies: TCompany[] }>(this.http, '/companies');
  }
}
