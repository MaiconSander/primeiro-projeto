import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor (private formBuilder: FormBuilder) {

  }
   
  // Utilizando FormGroup é FormControl
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // });

  //Utilizando FormBuilder
  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    nickname: this.formBuilder.array([this.formBuilder.control('')])
  });

  get apelidos() {
    return this.profileForm.get('nickname') as FormArray
  }
  
  PreencherFormulario() {
    this.profileForm.patchValue({
      name:'Maicon',
      cpf: '13335632254',
      address: {
        street: 'R Canaa',
        city: 'Unaí',
        state: 'MG',
        zip: '7832198321'

      }
    });
  }

  adcionarApelidos() {
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
    console. warn(this.profileForm.value);
    }
}
