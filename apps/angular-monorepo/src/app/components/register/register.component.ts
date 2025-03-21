import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  title = 'Register';
  @Input() inputRows = {};

  registerForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit() {
    this.inputRows = this.registerForm.value;
    console.log(this.inputRows);
  }
}
