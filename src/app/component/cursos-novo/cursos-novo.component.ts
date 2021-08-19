import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso/curso.model';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-cursos-novo',
  templateUrl: './cursos-novo.component.html',
  styleUrls: ['./cursos-novo.component.css']
})
export class CursosNovoComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  salvar(){

    this.cursoService.createCurso(this.curso)
    .subscribe(
      dado =>{
        console.long(dado)
        this.cursoService.openSnackBar(`Curso Criado com Sucesso!`);
        this.router.navigate([`/Curso`]);
      }
    )

  }

  cancelar(){

    this.router.navigate(`/curso`)

  }


}
