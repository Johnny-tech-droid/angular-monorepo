import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  title = 'Register';
  @Input() registerForm: FormGroup = new FormGroup({});

  /**
   * TODO: FormGroup, FormControl, Validators
   */
}

export interface RegisterForm {
  username: string;
  name: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
}