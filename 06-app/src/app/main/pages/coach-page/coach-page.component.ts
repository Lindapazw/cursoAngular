import { Component, ViewChild } from '@angular/core';
// paginador
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// :( estamos llamando a la clase dice cami :(
import { EmpleadoService } from 'src/app/service/empleado.service';
// lo solucione segun cami :(
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-coach-page',
  templateUrl: './coach-page.component.html',
  styleUrls: ['./coach-page.component.css']
})
export class CoachPageComponent {
  listaEmployees: Employee[]=[];

  constructor(private servicio: EmpleadoService) {
  }

  ngOnInit(): void {
    this.listEmployees();
  }

  private listEmployees(): void {
    this.servicio.listEmployees().subscribe(
      respuesta => this.listaEmployees = respuesta,
      error => console.log('error :(')
    );
  }

  List_Employee: Employee[] = [
  ];

  displayedColumns: string[] = ['name', 'lastName', 'dni','longGoal','shortGoal','acciones'];
  dataSource = new MatTableDataSource(this.List_Employee);

  // le agrego signo de exclamacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
