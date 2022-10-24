import { Injectable } from '@angular/core';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EserviceService {
  employees: Employee[] =[{
    id: 1,
    name: 'Hiep Nguyen',
    email: 'gagga5376@gmail.com',
    phoneNumber: '0849582782',
    address: '34 Ham Tu Quan'
  }, {
    id: 2,
    name: 'Hieu Ngo',
    email: 'hiep@gmail.com',
    phoneNumber: '0948615246',
    address: 'Lao Cai'
  }, {
    id: 3,
    name: 'Ba Tran',
    email: 'ba@gmail.com',
    phoneNumber: '0946213482',
    address: 'Thai Binh'
  }, {
    id: 4,
    name: 'Hoang Pham',
    email: 'hoang@gmail.com',
    phoneNumber: '0948135465',
    address: 'Ha Nam'
  }]
  constructor() { }

  employeeTemp : Employee = {}

  getAll() {
    return this.employees;
  }

  getEmployeeTemp(){
    return this.employeeTemp;
  }

  findEmployeeById(id:number) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id){
        this.employeeTemp = this.employees[i]  ;
      }
    }
  }

  saveEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(id: number) {
    const indexOfObject = this.employees.findIndex((object) => {
      return object.id === id;
    });
    console.log(indexOfObject);
    this.employees.splice(indexOfObject,1);
    console.log(this.getAll());
  }

  editEmployee(id: number | undefined, temp: Employee){
    const indexOfObject = this.employees.findIndex((object) => {
      return object.id === id;
    });
    console.log(indexOfObject);
    this.employees  [indexOfObject]= temp;
  }
}
