import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPadreComponent } from './form-padre/form-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'n_formulario';
}
