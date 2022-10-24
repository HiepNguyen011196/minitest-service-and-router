import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {EserviceService} from "../../Eservice/eservice.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EserviceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  findEmployeeById(id: number) {
    this.employeeService.findEmployeeById(id);
    console.log(this.employeeService.employeeTemp)
  }

  getAll() {
    this.employees = this.employeeService.getAll();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getAll();
  }
}
