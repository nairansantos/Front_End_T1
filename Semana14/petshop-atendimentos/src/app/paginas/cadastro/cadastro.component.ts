import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup
  constructor(private serviceFirebase: ApiService) {
    this.form = new FormGroup({
      'Email': new FormControl(null, Validators.required),
      'Nome': new FormControl(null, Validators.required),
      'Endereco': new FormControl(null, Validators.required),
      'NomedoPet': new FormControl(null, Validators.required),
      'IdadedoPet': new FormControl(null, Validators.required),
      'Data': new FormControl(null, Validators.required),
      'Hora': new FormControl(null, Validators.required),
    })
  }
  onSubmit() {

    const novoAtendimento = {

      Email: this.form.get('Email')?.value,
      Nome: this.form.get('Nome')?.value,
      Endereco: this.form.get('Endereco')?.value,
      NomedoPet: this.form.get('NomedoPet')?.value,
      IdadedoPet: this.form.get('IdadedoPet')?.value,
      Data: this.form.get('Data')?.value,
      Hora: this.form.get('Hora')?.value,
    }

    this.serviceFirebase.addAtendimento(novoAtendimento)
    this.form.reset()
  }


}
