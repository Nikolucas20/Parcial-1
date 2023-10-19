import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MascotasModel } from 'src/app/Models/MascotaModel';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.css']
})
export class FormMascotasComponent {
  mascota: MascotasModel = {
    NombreMascota: null,
    EdadMascota: null,
    Raza:null
  }

  constructor(public api:ApiService){ }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nombreMascota: [null,Validators.required],
    edadMascota: [null,Validators.required],
    raza: [null,Validators.required],
  });

  onSubmit(): void {
    if(this.addressForm.valid){
      this.mascota.NombreMascota = this.addressForm.controls['nombreMascota'].value;
      this.mascota.EdadMascota = this.addressForm.controls['edadMascota'].value;
      this.mascota.Raza = this.addressForm.controls['raza'].value;
      console.log(this.mascota)
      this.api.post('Mascotas',this.mascota).then((res)=>{
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
