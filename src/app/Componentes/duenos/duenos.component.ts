import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-duenos',
  templateUrl: './duenos.component.html',
  styleUrls: ['./duenos.component.css']
})
export class DuenosComponent implements OnInit {
  constructor(public api: RestService){}
  titulo = 'Dueños'

   ngOnInit(){
    this.api.GetData('Dueño');
  }
}
