import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { THttpResponse } from 'contants';
import { Observable } from 'rxjs';
import { getData } from './storage';

const generateOptions = () => {
  const token = getData('token');
  return {
    headers: new HttpHeaders({
      authorization: token || '',
    }),
  };
};

export const post = <T extends Object>(
  http: HttpClient,
  route: string,
  body: Record<string, unknown> | FormData
): Observable<THttpResponse<T>> => {
  const options = generateOptions();
  return http.post(environment.apiUrl + route, body, options) as Observable<
    THttpResponse<T>
  >;
};

export const patch = <T extends Object>(
  http: HttpClient,
  route: string,
  body: Record<string, unknown> | FormData
): Observable<THttpResponse<T>> => {
  const options = generateOptions();
  return http.patch(environment.apiUrl + route, body, options) as Observable<
    THttpResponse<T>
  >;
};

export const get = <T extends Object>(
  http: HttpClient,
  route: string
): Observable<THttpResponse<T>> => {
  const options = generateOptions();
  return http.get(environment.apiUrl + route, options) as Observable<
    THttpResponse<T>
  >;
};
