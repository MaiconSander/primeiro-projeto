import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  model = new Customer(null, '','');

  generos = ['Masculino', 'Feminino', 'Prefiro não informar'];
name: any;

submitted = false;

onSubmit() {
  
  this.submitted = true;

  console.warn(this.model)
}

}
