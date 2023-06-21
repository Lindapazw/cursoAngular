import { Injectable } from '@angular/core';

// http
import { HttpClient } from '@angular/common/http';
// model
import { Employee } from '../models/employee';
// observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) {
  }

  public listEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/api/employee')
  }
}
