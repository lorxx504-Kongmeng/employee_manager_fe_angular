import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {IEmployee} from "../interfaces/IEmployee";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpService: HttpService) {}
  public employee_Obserable = new BehaviorSubject<IEmployee[] | null>(null);
  public getEmployee() {
    this.httpService.getEmployee().pipe(first()).subscribe((response: IEmployee[]) => {
      // console.log(response)
        this.employee_Obserable.next(response);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }





}
