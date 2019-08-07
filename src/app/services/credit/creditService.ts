import { Injectable } from '@angular/core';

import { ApiCredit } from '../../api/apiCredit';
// Libraries

import { Observable, of } from 'rxjs';

@Injectable()

export class CreditService {
  constructor(public api: ApiCredit) { }

  createCredit(body) {
    const seq = this.api.post('create', body);
    return seq;
  }
}
