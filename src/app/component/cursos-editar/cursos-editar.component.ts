import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso/curso.model';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './cursos-editar.component.html',
  styleUrls: ['./cursos-editar.component.css']
})
export class CursosEditarComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(private cursoservicer: CursoService,
              private router : Router,
              private rotative: ActivatedRoute){

              }

  constructor() { }

  ngOnInit(): void {
  }

  getCurso(id){
    this.cursoservicer.getCurso(id)

  .subscribe(
    dado=>{
      this.curso = dado;
      console.long(dado);
    },
    error => {
      console.long(Error);
    }
  )
  }

  atualizar(){
    this.cursoservice.updateCurso(this.curso.idcurso).subscribe(
      dado = >{
        this.cursoservice.openSnackBar('Curso Atualizado!');
        console.log(dado);
      },
    )
  }

  cancelar(){
    this.router.navigate(['/cursos']);
  }
}
