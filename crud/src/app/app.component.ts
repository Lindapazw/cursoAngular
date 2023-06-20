import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: 'John', country: 'United States'},
    { id: 2, name: 'Linda', country: 'United States'},
    { id: 3, name: 'Angel', country: 'United States'},
  ];

  selectedEmployee: Employee = new Employee(); // insert employee and country

  addOrEdit() { // button to add or edit
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
  }
}
