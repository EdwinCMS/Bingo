import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {
  nombre:string = 'Edwin';
  apellido:string = 'Moreno';
  nombreUs:string = 'EdwinCMS';
  rol:string[] =['Superadmin','Usuario'];
  fechaCreado:string =  '2 Oct. 2020';
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

}
