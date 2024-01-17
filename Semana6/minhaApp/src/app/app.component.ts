import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ManchesterCityComponent } from "./manchester-city/manchester-city.component";
import { EstrelaVermelhaComponent } from "./estrela-vermelha/estrela-vermelha.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ManchesterCityComponent, EstrelaVermelhaComponent]
})
export class AppComponent {
  title = 'minhaApp';
  chovendo = true;
  getTempo(){
    return this.chovendo ? 'blue': 'red';
  }
}

