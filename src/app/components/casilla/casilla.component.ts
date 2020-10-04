import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.sass']
})
export class CasillaComponent implements OnInit {
@Input() casilla:string;
estado:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  activaCuadriculaA(a){
    //var a = document.getElementById('a');    //.style.backgroundColor = 'red';
    if(a.classList.toggle('bg-cuadricula-activa')){
      this.estado = true;
    }
    if(a.classList.toggle('bg-cuadricula'))
    this.estado = false;
  }
}
