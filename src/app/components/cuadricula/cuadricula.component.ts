import { Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'app-cuadricula',
  templateUrl: './cuadricula.component.html',
  styleUrls: ['./cuadricula.component.sass']
})
export class CuadriculaComponent implements OnInit {  
  prueba:string[];  
  //@HostBinding('attr.class') cssClass = 'container';
  
  constructor() { 
    this.prueba = ['0','1','2','3','4'];    
    }
  
  ngOnInit(): void {
  }
  
}
