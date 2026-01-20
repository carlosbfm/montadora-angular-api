import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tipoLogin: string = '';
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      matricula: [''],
      email: [''],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    const tipo = this.route.snapshot.paramMap.get('tipo');
    if (tipo) {
      this.tipoLogin = tipo;
      this.configurarValidadores();
    }
  }

  private configurarValidadores() {
    if (this.tipoLogin === 'funcionario') {
      this.loginForm.get('matricula')?.setValidators([Validators.required]);
      this.loginForm.get('email')?.clearValidators();
    } else {
      this.loginForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.loginForm.get('matricula')?.clearValidators();
    }
    this.loginForm.updateValueAndValidity();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}