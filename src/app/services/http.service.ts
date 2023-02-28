import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "../interfaces/IEmployee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiSeverUrl = "http://localhost:8008/employee";
  constructor(private http:HttpClient) {}
  public getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiSeverUrl}/all`);
  }
  public addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.apiSeverUrl}/add`, employee);
  }

  public updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.apiSeverUrl}/update`,employee);
  }
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiSeverUrl}/delete/${employeeId}`);
  }
}
