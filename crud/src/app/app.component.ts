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

  openForEdit(employee: Employee){ // class.active
    this.selectedEmployee = employee; // se llena el formulario con los datos
  }


  addOrEdit() {

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee(); // clean screen
  }

  delete(){
    if(confirm("Are you sure")) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee(); // clean screen
    }
  }
}
