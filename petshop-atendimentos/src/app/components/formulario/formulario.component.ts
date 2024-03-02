import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      'Email': new FormControl(null),
      'Senha': new FormControl(null)
    })
  }
  onSubmit(){}

}
