import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CheckboxModule, InputTextModule, InputIconModule, IconFieldModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Koala-Web';

  loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    });
  }
}
