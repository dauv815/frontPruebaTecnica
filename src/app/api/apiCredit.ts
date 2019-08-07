import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ApiCredit {
 url = 'http://127.0.0.1:3000/credits';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string) {
    return this.http.get(this.url + '/' + endpoint);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, id: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint + '/' + id, body, reqOpts);
  }

}
