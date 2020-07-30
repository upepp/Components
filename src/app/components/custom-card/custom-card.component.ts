import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  titulo: string= 'Bem Vindos ao Eva Unidade 01';
  subtitulo: string= 'eu sou a majór Katsuragi e adoraria te apresentar a nossa melhore piloto.Esta é Rei, a mais calada porém a mais forte dentre todos. Só ela possui treinamento o suficiente para pilotar uma unidade Eva. No momento estamos precisando de você, Shinji Ikari, para salvar a humanidade dos seres grotescos que chamamos de Anjos.';

  @Input() amount: string; 
 
  @Output() buttonPressed = new EventEmitter<string>();

  constructor() { };

  ngOnInit() {};

  suplica(){
    console.log ('funcionou');
    this.buttonPressed.emit["Por favor Shinji, nós precisamos de você, nossa unica piloto está ferida e só você pode nos salvar do Anjo que nos ataca!"];
    
  }

}
