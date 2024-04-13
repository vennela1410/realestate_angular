import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { FormsModule,FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private router: Router) {
     
   }

  username: string = '';
  password: any;
  showSpinner: any;
  fb: FormBuilder = new FormBuilder;
  form: FormGroup = this.fb.group({     // {5}
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  formSubmitAttempt: boolean = false;

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.form.valid) {
      if(this.form.get('userName')?.value == 'admin' && this.form.get('password')?.value == 'password@123'){
        this.router.navigate(["home"]);
       }else {
         alert("Invalid login credentials");
       }
      // this.authService.login(this.form.value); 
    }else {
      alert("Invalid login credentials");
    }
    this.formSubmitAttempt = true;            
  }

  registerUser() {
    this.router.navigate(["register"]);
  }
}