import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './component/curso/curso.component';
import { CursosEditarComponent } from './component/cursos-editar/cursos-editar.component';
import {HomeComponent} from './component/home/home.component';
import { CursosNovoComponent } from './component/cursos-novo/cursos-novo.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "Cursos",
    component: CursoComponent
  },
  {
    path: "curso-novo",
    component: CursosNovoComponent
  },
  {
    path: "cursos-editar/:id",
    component: CursosEditarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
