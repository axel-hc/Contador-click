import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
  public n: number = 0;

  constructor() { }

  ngOnInit() {
  }

add(){
  this.n +=1;
}

reset(){
  this.n-=1;
}
}

div.left.aling
.btn.btn-mas((click)="add()"){{n}}
div.rigth.aling
.btn.btn-menos((Click)="reset()"){{n}}

