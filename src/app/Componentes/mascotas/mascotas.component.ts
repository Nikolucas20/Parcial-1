import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  constructor(public api: RestService){}
  titulo = 'Mascotas'

   ngOnInit(){
    this.api.GetData('Mascotas');
  }
}
