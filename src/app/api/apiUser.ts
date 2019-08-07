import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ApiUser {
 url = 'http://127.0.0.1:3000/users';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string) {
    return this.http.get(this.url + '/' + endpoint);
  }

  checkIdentify(endpoint: string, identify: string): Observable<any> {
    return this.http.get(this.url + '/' + endpoint + '/' + identify);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, id: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint + '/' + id, body, reqOpts);
  }

}
