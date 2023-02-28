import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "./interfaces/IEmployee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiSeverUrl = "";

  constructor(private http:HttpClient) {}

  public getEmployee(): Observable<IEmployee[]> {


    return this.http.get<IEmployee[]>(`${this.apiSeverUrl}/employee/all`);
  }
}
