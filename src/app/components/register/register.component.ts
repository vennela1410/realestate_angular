import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonServiceService} from "../common-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  validUserId = false;
  fb: FormBuilder = new FormBuilder;
  form: FormGroup = this.fb.group({     // {5}
    userName: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required],
  });

  constructor(private service: CommonServiceService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required],
    });
  }

  onClick() {
    let request = {
      userId: '',
      password: '',
      firstName: '',
      lastName: '',
      emailId: ''
    };
    if (!this.validUserId) {
      if (this.form.controls['userName'].value?.length > 0) {
        request['userId'] = this.form.controls['userName'].value
        this.service.registerUser(request, true).subscribe(resp => {
          if (resp.statusCode == 200) {
            this.validUserId = true;
          } else {
            window.alert(resp.message);
          }

        });
      } else {
        window.alert('Please enter a valid UserId.')
      }
    } else {
      // @ts-ignore
      request['userId'] = this.form.controls['userName'].value;
      request.password = this.form.controls['password'].value;
      request.firstName = this.form.controls['firstName'].value;
      request.lastName = this.form.controls['lastName'].value;
      request.emailId = this.form.controls['emailId'].value;
      this.service.registerUser(request, false).subscribe(resp => {
        if (resp.statusCode == 200) {
          this.router.navigate(["home"]);
        } else {
          window.alert(resp.message);
        }
      });
    }
  }
}
