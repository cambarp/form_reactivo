import { Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-hijo',
  standalone: true,
  imports: [],
  templateUrl: './form-hijo.component.html',
  styleUrl: './form-hijo.component.css'
})
export class FormHijoComponent {
  @Input() datosPadre: any;
  @Output() D_padre = new EventEmitter<any>();

  enviarDatos_Padre() {
    this.D_padre.emit(this.datosPadre);
  }
  

}
