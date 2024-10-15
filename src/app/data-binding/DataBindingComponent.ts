import { Component } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  estilizarTitulo = false;

  botaoClass = 'botao verde';

  message = 'meu primeiro data-binding';

  imagePath = 'assets/@renato.webp';

  isDesabled = false;

  ariaLabel = 'fechar';

  botaoFechar = `
   border: 1px solid;
   border-radius: 45px
   padding: 5px;
   width: 30px;
   height: 30px
   display: flex;
   justify-content: center;
   align-items: center
  `;

  nomeCliente = '';

  enableCloseButton() {
    this.isDesabled = !this.isDesabled;
  }

  AplicarEstiloTitulo() {
      this.estilizarTitulo = !this.estilizarTitulo;
  }

}


