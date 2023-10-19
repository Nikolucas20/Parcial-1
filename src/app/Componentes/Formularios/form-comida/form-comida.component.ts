import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { ComidasModel } from 'src/app/Models/ComidaModel';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-form-comida',
  templateUrl: './form-comida.component.html',
  styleUrls: ['./form-comida.component.css']
})
export class FormComidaComponent {
  comida: ComidasModel = {
    TipoComida: null,
    TipoMascota: null,
    Precio:null
  }

  constructor(public api:ApiService){ }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    tipoComida: [null,Validators.required],
    tipoMascota: [null,Validators.required],
      precio: [null,Validators.compose([
      Validators.required,Validators.minLength(1000),Validators.maxLength(50000)
    ])]
  });

  onSubmit(): void {
    if(this.addressForm.valid){
      this.comida.TipoComida = this.addressForm.controls['tipoComida'].value;
      this.comida.TipoMascota = this.addressForm.controls['tipoMascota'].value;
      this.comida.Precio = this.addressForm.controls['precio'].value;
      console.log(this.comida)
      this.api.post('Comidums',this.comida).then((res)=>{
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
