import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.sass']
})
export class ModalidadComponent implements OnInit {  
  constructor() { }

  ngOnInit(): void {
  }
  mostrarCuadricula(x){
    console.log(x.value);      
  }
}
