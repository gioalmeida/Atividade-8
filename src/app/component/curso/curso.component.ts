import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CursoService } from 'src/app/curso/curso.service';
import { Curso } from './curso.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  Cursos: any[] = [];

  curso: Curso = new this.curso();

  cursoDataSource: MatTableDataSource<curso>
  displayedCursos: String[] = ['idcurso', 'nomecurso', 'update', 'delete'];
  
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private cursoservice: CursoService, private router: Router){}
  
  ngOnInit(): void {
  }

  getcursoList(){
    this.cursoservice.getCursoList()
    .subscribe(
      dados =>{
        this.cursoDataSource = new MatTableDataSource<Curso>(dados);
        this.cursoDataSource.paginator = this.paginator;
        this.cursoDataSource.sort = this.sort;
      }
      error =>{
        console.long(error);
      }
      
    )
  }

  filtrarCursos(event: Event){
    let valor = (event.target as HTMLImputElement).value;
    this.cursoDataSource.filter = valor;
  }

  deletarCurso(delcurso: Curso){
    this.cursoservice.deleteCurso(delcurso.idcurso)
    .subscribe(
      dados => {
        this.cursoservice.openSnackBar('Curso Excluido!');
        this.getcursoList();
      }
    )
  }

  navigateToCursoNovo(){
    this.router.navigate([`/curso-novo`]);
  }

  navigareToCursoEditar(curso: Curso){
    this.router.navigate([`/curso-Editar/${curso.idcurso}`])
  }

}
