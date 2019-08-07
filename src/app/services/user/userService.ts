import { Injectable } from '@angular/core';

import { ApiUser } from '../../api/apiUser';
// Libraries

import { Observable, of } from 'rxjs';

@Injectable()

export class UserService {
  constructor(public api: ApiUser) { }

  checkIdentify(endpoint: string, identify: string) {
    const seq = this.api.checkIdentify(endpoint, identify);
    return seq;
  }

  createUser(body): Observable<any> {
    const seq = this.api.post('create', body);
    return seq;
  }
}
