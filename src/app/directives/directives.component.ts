import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  classeBotaoVerde = 'botao verde';

  classeBotaoVermelho = 'botao vermelho'

  estilosParagrafo = {'font-size': '14px', 'font-style': 'italic' }

  AplicarEstiloVerde = false; name ='';

  campoVisiveis = true;

  //array de objetos
  clientes = [
   {nome: 'maicon'},
   {nome: 'malcom'},
   {nome: 'jude'},
   {nome: 'william'}
  ];
  
  AplicarEstilos() {
    this.AplicarEstiloVerde = !this.AplicarEstiloVerde;
  }

  
  alterarParaMaiusculo($event: string) {
      this.name = $event.toUpperCase();
  }

  esconderCampos() {
    this.campoVisiveis = !this.campoVisiveis;
  }

}
