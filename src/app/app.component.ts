import { Component } from '@angular/core';
import {IEmployee} from "./interfaces/IEmployee";
import {HttpService} from "./services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./services/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employees: IEmployee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployee();

    this.employeeService.employee_Obserable.subscribe((response: IEmployee[] | null) => {
      if (response!=null) {
        this.employees = response;
      }
    }, error => console.log(error));
  }


}
