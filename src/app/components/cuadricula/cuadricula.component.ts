import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadricula',
  templateUrl: './cuadricula.component.html',
  styleUrls: ['./cuadricula.component.sass']
})
export class CuadriculaComponent implements OnInit {  
  prueba:string[];
  
  constructor() { 
    this.prueba = ['0','1','2','3','4'];    
    }
  
  ngOnInit(): void {
  }
  
  activaCuadriculaB(){
    var b = document.getElementById('b');    //.style.backgroundColor = 'red';
    b.classList.toggle('bg-cuadricula-activa')
    b.classList.toggle('bg-cuadricula')
  }
}
