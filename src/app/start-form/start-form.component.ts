import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.css']
})
export class StartFormComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router) {}

    userForm = this.builder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+\@[A-z]+\.[A-z]+$/)]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatedPass: ['', [Validators.required, Validators.minLength(6)]]
    });

  registration() {
    if (this.userForm.get('password').value !== this.userForm.get('repeatedPass').value) {
      alert('Password didn`t match!');
      this.userForm.patchValue({
        password : '',
        repeatedPass: ''
      });
    } else {
      this.router.navigate(['/first_page']);
    }
  }

  ngOnInit() {
  }

}
