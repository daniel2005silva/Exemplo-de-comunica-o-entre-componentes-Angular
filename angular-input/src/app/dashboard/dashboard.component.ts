import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientesLista: Array<any> = [
    { nome: 'Ana' },
    { nome: 'Priscila' },
    { nome: 'Thiago' },
    { nome: 'Eduardo' },
    { nome: 'Junior' },
    { nome: 'Igor' },
    { nome: 'Alexandre' }
  ];

  numero: number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.mudouValor.emit(`${this.numero++}`);
  }

}
