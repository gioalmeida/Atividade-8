import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, observable } from "rxjs";
import { Aluno } from "./aluno.model";
import { updateFunctionExpression } from "typescript";

@Injectable({
    providedIn: 'root'
})
export class AlunoService{
    baseurl = 'http://localhorst:8080/sistema-academico/alunos';
    //injetando os objetos httpcliente e snackbar
    constructor(private httpclient: HttpClient, private _snackbar: MatSnackBar){

     openSnackBar(mensagem:string) {
            this._snackBar.open('mensagem,', 'Y', {
              horizontalPosition: "rigth",
              verticalPosition: "top",
            });
          }
    }
    
    getAlunoList(): Observable<any>{
        return this.httpclient.get(`${this.baseurl}`);
    }

    getAluno (id : Number); Observable<alunos>{
        return this.httpclient.get(`${this.baseurl}/${id}`);

    }

    cratealuno(cuso: Object); Observable<Object>{
        return this.httpclient.post(`${this.baseurl}/${id}`, Aluno);
    }

    updateCursp(id: Number, value: any) :Observable<Object>{
        return this.httpclient.put(`${this.baseurl}/${id}`, value)
    }

}