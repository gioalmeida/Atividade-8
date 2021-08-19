import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno/aluno.model';
import { AlunoService } from '../aluno/aluno.service';

@Component({
  selector: 'app-alunos-editar',
  templateUrl: './alunos-editar.component.html',
  styleUrls: ['./alunos-editar.component.css']
})
export class AlunosEditarComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(private alunoservicer: AlunoService,
              private router : Router,
              private rotative: ActivatedRoute){

              }

  constructor() { }

  ngOnInit(): void {
  }

  getAluno(id){
    this.alunoservicer.getAluno(id)

  .subscribe(
    dado=>{
      this.aluno = dado;
      console.long(dado);
    },
    error => {
      console.long(Error);
    }
  )
  }

  atualizar(){
    this.aluno.service.updateAluno(this.aluno.IdAluno).subscribe(
      dado = >{
        this.alunoservice.openSnackBar('Aluno Atualizado!');
        console.log(dado);
      },
    )
  }

  cancelar(){
    this.router.navigate(['/Alunos']);
  }
}
