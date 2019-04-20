import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService
{
    constructor(private http: HttpClient) {}

    obtenerCategorias()
    {
        const url = "http://127.0.0.1:8080/api/categorias";
        return this.http.get(url).pipe();
    }

    obtenerCategoriaPorId(catId: number)
    {
        const url = `http://127.0.0.1:8080/api/categorias/${catId}`;
        return this.http.get(url).pipe();
    }
}
