import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormEventsService } from './services/form-events.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterOutlet,FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormEventsService]
})
export class AppComponent {
  title = 'FormEvents';
}
