import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NgIf } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'user_email': [null, [Validators.required, Validators.email, Validators.minLength(10)]],
      'user_password': [null, [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/)]],
 
    });

   
  }

  onSubmit(form:FormGroup){

    if (this.loginForm.valid) {
      this.authService.loginUser(form.value.user_email, form.value.user_password).subscribe((res) => {
        setTimeout(() => {
          this.router.navigate(['/'])

        }, 1000)
      })

    } else {
      alert("formulário inválido, por favor preencha todos os campos corretamente")

    }
  }

}
