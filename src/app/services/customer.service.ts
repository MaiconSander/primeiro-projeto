import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers = [
    {id: 1, nome: 'maicon'},
    {id: 2, nome: 'renato'},
    {id: 3, nome: 'harold'}
    ]

  getCustomers() {
    return this.customers;
  }

  getByld(id: number) {

    let customer = this.customers.find(c =>{
      return c.id === id;
    });

    return customer;
  }
}
