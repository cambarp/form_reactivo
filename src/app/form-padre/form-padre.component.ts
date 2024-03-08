import { Component } from '@angular/core';
import { FormHijoComponent } from '../form-hijo/form-hijo.component';
import { ReactiveFormsModule ,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-padre',
  standalone: true,
  imports: [FormHijoComponent,ReactiveFormsModule],
  templateUrl: './form-padre.component.html',
  styleUrl: './form-padre.component.css'
})
export class FormPadreComponent {
 formulario = new FormGroup({
  
    nombre: new FormControl(''),
    correo: new FormControl(''),
    contrasena: new FormControl(''),
 
 })
 datosIngresados:any;

  guardarDatos() {
    this.datosIngresados = this.formulario.value;
    this.formulario.reset();
  }

  Datos_Hijo: any;

  DatosHijo(datos: any){
    this.Datos_Hijo = datos;
    this.formulario.patchValue({
      nombre: this.Datos_Hijo.nombre,
      correo: this.Datos_Hijo.correo,
      contrasena: this.Datos_Hijo.contrasena
    })
  }
  
  }

    
  


  

