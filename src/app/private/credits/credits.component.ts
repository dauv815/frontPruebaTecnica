import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  formCredit: FormGroup;
  messageGreat = false;
  messageError = false;
  showForm = false;
  message: string;
  name = '';
  nit = '';
  salary = '';
  dateEntry = '';

  constructor(public fb: FormBuilder, private creditService: CreditService, private route: Router) {
    this.formCredit = this.fb.group({
      nit: ['', Validators.compose([Validators.required])],
      nameCompany: ['', [Validators.minLength(3),
              Validators.pattern('^([A-Za-z\u00C0-\u00DC][^0-9]*)$'),
              Validators.required]],
      salary: ['', [Validators.min(0),  Validators.max(100000000),
                Validators.required]],
      dateEntry: ['', Validators.required]
      });

   }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.showForm = true;
    }
  }

  onSubmit(): void {
    const data = this.formCredit.value;
    data.userId = localStorage.getItem('userId');
    const seq = this.creditService.createCredit(data);
    seq.subscribe((res: any) => {
      if (res.status.code === 200) {
        this.messageGreat = true;
        this.message = res.message;
      }
      if (res.status.code === 500) {
        console.log(res.message);
        this.messageError = true;
        this.message = res.message;
      }
    }, err => {
      console.error('ERROR', err);
    });
    console.log(data);
 }
goToUsers() {
  this.route.navigate(['/users']);
}
goToCredits() {
  this.messageGreat = false;
  this.name = '';
  this.nit = '';
  this.salary = '';
  this.dateEntry = '';
}

}
