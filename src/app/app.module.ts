import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { CursoComponent } from './component/curso/curso.component';
import { CursosEditarComponent } from './component/cursos-editar/cursos-editar.component';
import { ConfirmacaoComponent } from './dialog/confirmacao/confirmacao.component';
import { CursosNovoComponent } from './component/cursos-novo/cursos-novo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    CursosEditarComponent,
    ConfirmacaoComponent,
    CursosNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, MatToolbarModule,
    MatSidenavModule, 
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
