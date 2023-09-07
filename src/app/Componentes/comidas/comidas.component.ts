import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {
  constructor(public api: RestService){}
  titulo = 'Comidas'

   ngOnInit(){
    this.api.GetData('Comidums');
  }

}
