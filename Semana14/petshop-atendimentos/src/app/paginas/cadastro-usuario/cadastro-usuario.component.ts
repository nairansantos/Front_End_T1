import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  cadastroForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      'user_email': [null, [Validators.required, Validators.email, Validators.minLength(10)]],
      'user_password': [null, [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/)]],
 
    });

   
  }

  onSubmit(form:FormGroup){

    if (this.cadastroForm.valid) {
      this.authService.signupUser(form.value.user_email, form.value.user_password).subscribe((res) => {
        setTimeout(() => {
          this.router.navigate(['/'])

        }, 1000)
      })

    } else {
      alert("formulário inválido, por favor preencha todos os campos corretamente")

    }
  }

}
