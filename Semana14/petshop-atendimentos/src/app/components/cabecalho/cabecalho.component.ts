import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  private inscricao!: Subscription;
  autenticado = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.inscricao = this.authService.usuario.subscribe(
      usuario => {
        this.autenticado = usuario.token == null ? false : true;
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']),
    window.location.reload()
  
  }
}
