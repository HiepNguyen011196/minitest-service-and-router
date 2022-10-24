import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EserviceService} from "../../Eservice/eservice.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input("id-edit-employee") id : number = 0;

  employeeForm: FormGroup ;
  constructor(private employeeService : EserviceService) {
    const employee = this.employeeService.employeeTemp;
    this.employeeForm = new FormGroup({
      id: new FormControl(employee.id),
      name: new FormControl(employee.name),
      email: new FormControl(employee.email),
      phone: new FormControl(employee.phoneNumber),
      address: new FormControl(employee.address),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const employeeEdit = this.employeeForm.value;
    this.employeeService.editEmployee(employeeEdit.id,employeeEdit);
    this.employeeForm.reset();
  }
}
