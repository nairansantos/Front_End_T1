import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao-atendimento',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './edicao-atendimento.component.html',
  styleUrl: './edicao-atendimento.component.css'
})
export class EdicaoAtendimentoComponent {
  form!: FormGroup
  id:string = '';
  constructor(private formConstrutor: FormBuilder,private serviceFirebase: ApiService, private rotas:Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.form = this.formConstrutor.group({
      'Email': [null, Validators.required],
      'Nome': [null, Validators.required],
      'Endereco': [null, Validators.required],
      'NomedoPet': [null, Validators.required],
      'IdadedoPet': [null, Validators.required],
      'Data': [null, Validators.required],
      'Hora': [null, Validators.required],
    })
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.preencherFormulario(this.id);
  }

  preencherFormulario(id:string){
    this.serviceFirebase.getAtendimentoPorId(id).subscribe(responseData => {
      console.log(responseData);
      this.form.setValue(responseData);
    });
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

    this.serviceFirebase.editarAtendimento(this.id,novoAtendimento)
    this.form.reset()
    this.rediracionaPrincipal()
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listagem']);
    }, 2000);
    
  }


}
