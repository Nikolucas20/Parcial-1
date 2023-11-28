import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ComidasModel } from 'src/app/Models/ComidaModel';
import { DuenosModel } from 'src/app/Models/DuenosModel';
import { MascotasModel } from 'src/app/Models/MascotaModel';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-duenos',
  templateUrl: './form-duenos.component.html',
  styleUrls: ['./form-duenos.component.css']
})
export class FormDuenosComponent {
  dueno: DuenosModel = {
    Nombre: null,
    Apellido: null,
    Edad: null,
    Direccion: null,    
    TipoMascota: null
  }

  constructor(public api:ApiService){ }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nombres: [null,Validators.required],
    apellido: [null,Validators.required],
    edad: [null,Validators.compose([
      Validators.required,Validators.pattern('^[5-99]+$')
    ])],
    direccion: [null,Validators.required],
    tipoMascota: [null,Validators.required],
  });

  onSubmit(): void {
    if(this.addressForm.valid){
      this.dueno.Nombre = this.addressForm.controls['nombres'].value;
      this.dueno.Apellido = this.addressForm.controls['apellido'].value;
      this.dueno.Edad = this.addressForm.controls['edad'].value;
      this.dueno.Direccion = this.addressForm.controls['direccion'].value;
      this.dueno.TipoMascota = this.addressForm.controls['tipoMascota'].value;
      console.log(this.dueno)
      this.api.post('Due%C3%B1o',this.dueno).then((res)=>{
        console.log(res);
        Swal.fire(
          'Registro completo',
          'Ya esta registrado en nuestro sistema...',
          'success'
        )
      }).catch((err)=>{
        Swal.fire(
          'Alerta',
          err,
          'error'
        )
      })
    }else{
      Swal.fire(
        'ALERTA',
        'Por favor registre el formulario de manera correcta...',
        'error'
      )
    }
  }
}
