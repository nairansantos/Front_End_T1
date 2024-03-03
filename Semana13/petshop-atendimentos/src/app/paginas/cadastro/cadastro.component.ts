import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      'Email': new FormControl(null,Validators.required),
      'Nome': new FormControl(null,Validators.required),
      'Endereco': new FormControl(null,Validators.required),
      'NomedoPet': new FormControl(null,Validators.required),
      'IdadedoPet': new FormControl(null,Validators.required),
      'Data': new FormControl(null,Validators.required),
      'Hora': new FormControl(null,Validators.required),
    })
  }
  onSubmit(){
    
  }
}
