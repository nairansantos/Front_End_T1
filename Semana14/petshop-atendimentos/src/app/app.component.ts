import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ApiService } from './service/api.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabecalhoComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ApiService,AuthService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class AppComponent {
  title = 'petshop-atendimentos';


  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.autoLogin()
  }
}
