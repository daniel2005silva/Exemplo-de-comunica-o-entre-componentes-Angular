import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listClientes: Array<any> = [
    { nome: 'Ana' },
    { nome: 'Priscila' },
    { nome: 'Thiago' },
    { nome: 'Eduardo' },
    { nome: 'Junior' },
    { nome: 'Igor' },
    { nome: 'Alexandre' }
  ];

  onMudouValor(evento: any){
    console.log(evento);
  }
}
