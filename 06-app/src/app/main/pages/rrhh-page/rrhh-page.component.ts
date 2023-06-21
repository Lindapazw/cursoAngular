import { Component } from '@angular/core';

export interface Employee {
  position: number;
  nombre: string;
  apellido: string;
  dni: number;
  role: string;
  senority: string;
  sex: string;
}

const ELEMENT_DATA: Employee[] = [
  {position: 1, nombre: 'Linda',  apellido: 'Paz', dni: 42379856, role: 'Angular developer jr.',senority:'junior', sex: 'F'},
  {position: 2, nombre: 'Juan', apellido: 'Martínez', dni: 37462854, role: 'diseñador gráfico',senority:'ceo',sex: 'F'},
  {position: 3, nombre: 'Ana', apellido: 'González', dni: 28675321, role: 'analista financiero',senority:'semi senior',sex: 'F'},
  {position: 4, nombre: 'Carlos', apellido: 'López', dni: 40986573, role: 'gerente de ventas',senority:'senior', sex: 'F'},
  {position: 5, nombre: 'María', apellido: 'Rodríguez', dni: 56847239, role: 'especialista en marketing',senority:'ceo', sex: 'F'},
  {position: 6, nombre: 'Pedro', apellido: 'Sánchez', dni: 62548917, role: 'consultor de negocios',senority:'semi senior', sex: 'M'},
  {position: 7, nombre: 'Laura', apellido: 'Torres', dni: 34987562, role: 'desarrollador web' ,senority:'junior', sex: 'F'},
  {position: 8, nombre: 'Manuel', apellido: 'Hernández', dni: 48762319, role: 'analista de datos',senority:'ceo', sex: 'F'},
  {position: 9, nombre: 'Isabel', apellido: 'Díaz', dni: 72983415, role: 'project manager',senority:'junior', sex: 'F'},
  {position: 10, nombre: 'Fernando', apellido: 'Gómez', dni: 51627398, role: 'arquitecto de software',senority:'ceo', sex: 'M'},
  {position: 11, nombre: 'Sofía', apellido: 'Vargas', dni: 64178235, role: 'especialista en recursos humanos',senority:'semi senior', sex: 'F'}
];

@Component({
  selector: 'app-rrhh-page',
  templateUrl: './rrhh-page.component.html',
  styleUrls: ['./rrhh-page.component.css']
})
export class RrhhPageComponent {
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'dni','role','senority', 'sex','acciones'];
  dataSource = ELEMENT_DATA;
}
