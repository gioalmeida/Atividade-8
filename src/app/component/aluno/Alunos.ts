import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from 'src/app/alunos/AlunoService';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluo.component.css']
})
export class AlunoComponent implements OnInit {

  Aluno: any[] = [];

  Aluno: Aluno = new this.aluno();

  alunoDataSource: MatTableDataSource<Aluno>
  displayedCursos: String[] = ['idaluno', 'nomealuno', 'update', 'delete'];
  
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private alunoservice: AlunoService, private router: Router){}

  
  
  ngOnInit(): void {
  }

  getAlunoList(){
    this.aluno.service.getAlunoList()
    .subscribe(
      dados =>{
        this.alunoDataSource = new MatTableDataSource<Aluno>(dados);
        this.alunoDataSource.paginator = this.paginator;
        this.alunoDataSource.sort = this.sort;
      }
      error =>{
        console.long(error);
      }
      
    )
  }

  filtrarAlunos(event: Event){
    let valor = (event.target as HTMLImputElement).value;
    this.alunoDataSource.filter = valor;
  }

  deletarAluno(deletarAluno: Aluno){
    this.aluno.service.deleteAluno(deletarAluno.IdAluno)
    .subscribe(
      dados => {
        this.aluno.service.openSnackBar('Aluno Excluido!');
        this.getalunoList();
      }
    )
  }

  navigateToAlunoNovo(){
    this.router.navigate([`/Aluno-novo`]);
  }

  navigareToAlunoEditar(aluno: Aluno){
    this.router.navigate([`/aluno-Editar/${aluno.IdAluno}`])
  }

}
