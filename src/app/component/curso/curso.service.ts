import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, observable } from "rxjs";
import { Curso } from "./curso.model";
import { updateFunctionExpression } from "typescript";

@Injectable({
    providedIn: 'root'
})
export class CursoService{
    baseurl = 'http://localhorst:8080/sistema-academico/cursos';
    //injetando os objetos httpcliente e snackbar
    constructor(private httpclient: HttpClient, private _snackbar: MatSnackBar){

     openSnackBar(mensagem:string) {
            this._snackBar.open('mensagem,', 'X', {
              horizontalPosition: "rigth",
              verticalPosition: "top",
            });
          }
    }
    
    getCursoList(): Observable<any>{
        return this.httpclient.get(`${this.baseurl}`);
    }

    getCurso (id : Number); Observable<curso>{
        return this.httpClient.get(`${this.baseurl}/${id}`);

    }

    cratecurso(cuso: Object); Observable<Object>{
        return this.httpclient.post(`${this.baseurl}/${id}`, Curso);
    }

    updateCursp(id: Number, value: any) :Observable<Object>{
        return this.httpClient.put(`${this.baseurl}/${id}`, value)
    }

    deleteCurso(id: number); Observable<Object>{
        return this.httpClient.delete(`${this.baseurl}/${id}`, {responseType: 'text'});
    }

    }
}