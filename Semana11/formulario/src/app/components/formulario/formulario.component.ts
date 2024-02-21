import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      Nome: new FormControl(null, [Validators.required,Validators.maxLength(12),Validators.pattern(/^\S{1,12}$/)]),
      NomeCompleto: new FormControl(null, [Validators.required,this.validaNomecompleto.bind(this)]),
      Senha: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{4,}$/)]),
      Email: new FormControl(null, [Validators.required,Validators.email,Validators.minLength(10)]),
      Telefone: new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(\d{2})\d{5}-\d{4}$/)]),
      Endereco: new FormControl(null, Validators.required),
      Aniversario: new FormControl(null, Validators.required),
      Genero: new FormControl(null, Validators.required),
      Profissao: new FormControl(null, Validators.required,),
    });
  }
  onSubmit() {}
  validaNomecompleto(control:AbstractControl){
    const value = control.value;
    if (value && value.trim().split(' ').length < 2) {
      return { Nomecompletoinvalid: true };
    }
    return null;
  }
}
