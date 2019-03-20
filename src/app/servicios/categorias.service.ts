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
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.categorias)
        );
    }

    obtenerCategoriaPorId(catId: number)
    {
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.categorias
            .filter((data: any) => data.id == catId)[0])
        );
    }
}
