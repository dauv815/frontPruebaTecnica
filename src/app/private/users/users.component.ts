import { UserService } from './../../services/user/userService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

formUser: FormGroup;
userValidate = false;
showMessage = false;
messageError = false;
messageGreat = false;
message: string;

  constructor(public fb: FormBuilder, private userService: UserService, private route: Router) {
    this.formUser = this.fb.group({
          identify: ['', Validators.compose([Validators.required])],
          name: ['', [Validators.minLength(3),
                  Validators.pattern('^([A-Za-z\u00C0-\u00DC][^0-9]*)$'),
                  Validators.required]],
          lastname: ['', [Validators.minLength(3),
                    Validators.pattern('^([A-Za-z\u00C0-\u00DC][^0-9]*)$'),
                    Validators.required]],
          birthday: ['', Validators.required]
          });
  }

  ngOnInit() {
  }

  checkIdentify(identify) {
    if (identify) {
      const seq = this.userService.checkIdentify('find', identify);
      seq.subscribe((res: any) => {
        if (res.status.code === 400) {
          this.userValidate = true;
        } else {
          if (res.status.code === 200) {
            this.userValidate = false;
            this.showMessage = true;
          }
        }
      }, err => {
        console.error('ERROR', err);
      });
    } else {
      this.userValidate = false;
    }
  }

  onSubmit(): void {
     const data = this.formUser.value;
     this.createUser(data);
  }

  createUser(data) {
    const seq = this.userService.createUser( data);
    seq.subscribe((res: any) => {
      if (res.status.code === 200) {
        console.log(res.message);
        localStorage.setItem('userId', res.user._id);
        this.messageGreat = true;
        this.message = res.message;
      }
      if (res.status.code === 500) {
        this.messageError = true;
        this.message = res.message;
      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  goToCredits() {
    this.route.navigate(['/credits']);
  }

}
