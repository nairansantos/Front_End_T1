import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    DestaqueComponent,
    ServicosComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
