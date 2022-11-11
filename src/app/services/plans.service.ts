import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES, TPlans } from 'contants';
import { get,post } from 'utils/serviceRequests';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) {}

  getPlansList() {
    return get<{ msg: string; list: TPlans[] }>(this.http, API_ROUTES.PLANS);
  }

}
