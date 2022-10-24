import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Employee} from "../../model/employee";
import {EserviceService} from "../../Eservice/eservice.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
  });

  constructor(private eService : EserviceService) { }

  ngOnInit(): void {
  }

  submit() {
    const employee = this.employeeForm.value;
    this.eService.saveEmployee(employee);
    this.employeeForm.reset();
  }
}
