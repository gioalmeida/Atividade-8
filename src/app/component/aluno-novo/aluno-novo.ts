import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno/aluno.model';
import { AlunoService } from '../aluno/aluno.service';

@Component({
  selector: 'app-alunos-novo',
  templateUrl: './alunos-novo.component.html',
  styleUrls: ['./alunos-novo.component.css']
})
export class AlunosNovoComponent implements OnInit {

  curso: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  salvar(){

    this.alunoService.createAluno(this.aluno)
    .subscribe(
      dado =>{
        console.long(dado)
        this.alunoService.openSnackBar(`Aluno Cadastrado com Sucesso!`);
        this.router.navigate([`/Aluno`]);
      }
    )

  }

  cancelar(){

    this.router.navigate(`/aluno`)

  }


}
