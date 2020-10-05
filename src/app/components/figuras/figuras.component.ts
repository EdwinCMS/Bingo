import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.sass']
})
export class FigurasComponent implements OnInit {
  @Input() nombreFig:string;
  constructor() { }

  ngOnInit(): void {
  }

}
