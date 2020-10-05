import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.sass']
})
export class CasillaComponent implements OnInit {
@Input() casilla:string;
@HostBinding('attr.class') cssClass = 'col-md-2';

estado:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  activaDesactivaCasilla(a:any):any{
    //var a = document.getElementById('a');    //.style.backgroundColor = 'red';
    if(a.classList.toggle('bg-cuadricula-activa')){
      //this.estado = true;
    }
    if(a.classList.toggle('bg-cuadricula')){
    //this.estado = false;
  }
}
}
